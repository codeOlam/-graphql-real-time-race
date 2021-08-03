import { useState, useEffect, useCallback, Fragment } from 'react'
import { Auth, API } from 'aws-amplify'
import { Signer, ICredentials } from '@aws-amplify/core'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {
  NavigationControl,
  Marker,
  ViewportProps,
  Source,
  Layer,
  LayerProps,
} from 'react-map-gl'
import { StarIcon, UserIcon, XIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { useList, useInterval } from 'react-use'

import {
  LocationClient,
  BatchEvaluateGeofencesCommand,
} from '@aws-sdk/client-location'
import monzaGeo from '../data/monza.geo.json'
import attractions from '../data/attractions.geo.json'
import config from '../aws-exports'

import * as subscriptions from '../graphql/subscriptions'
import { OnCreateLocationEventSubscription } from '../API'
import Observable from 'zen-observable'

const mapName = 'GraphQlRealTimeRacing'
const CollectionName = 'MonzaCircuit'
const data = monzaGeo as GeoJSON.FeatureCollection<GeoJSON.Geometry>
const attData = attractions as GeoJSON.FeatureCollection<GeoJSON.Geometry>

const dataLayer: LayerProps = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': 'red',
    'fill-opacity': 0.1,
  },
}

const attDataLayer: LayerProps = {
  id: 'att-data',
  type: 'fill',
  paint: {
    'fill-color': 'blue',
    'fill-opacity': 0.3,
  },
}

const mainLocation = {
  latitude: 45.621886,
  longitude: 9.284934,
}
interface SubscriptionValue<T> {
  value: { data: T }
}
type LocEvent = OnCreateLocationEventSubscription

type TMT = {
  event: LocEvent
  index: number
  removeAt: Function
  evict?: boolean
}

const ToastMessage = ({ event, index, removeAt, evict }: TMT) => {
  const device = event.onCreateLocationEvent?.deviceId!
  const date = new Date(
    event.onCreateLocationEvent?.sampleTime!
  ).toLocaleTimeString()
  const verb = event.onCreateLocationEvent?.type === 'EXIT' ? 'left' : 'entered'
  const loc = event.onCreateLocationEvent?.geofenceId
  return (
    <div>
      <span>{`${date} - ${device}`}</span>
      <span
        className={`${verb === 'left' ? 'text-red-500' : 'text-green-500'}`}
      >
        {' '}
        {verb}{' '}
      </span>
      <span>{loc}</span>
    </div>
  )
}

function Toast() {
  const [list, { push, sort, filter, removeAt, clear }] = useList<{
    event: LocEvent
    date: Date
  }>([])

  useInterval(
    () => {
      const now = new Date()
      filter(({ event, date }) => {
        const old = new Date(date)
        old.setSeconds(old.getSeconds() + 30)
        return old > now
      })
    },
    list.length ? 500 : null
  )
  useEffect(() => {
    const subscription = (
      API.graphql({
        query: subscriptions.onCreateLocationEvent,
      }) as unknown as Observable<SubscriptionValue<LocEvent>>
    ).subscribe({
      next: (resp) => {
        const event = resp.value.data
        console.log(event)
        push({ event, date: new Date() })
        sort((a, b) => {
          if (
            a.event.onCreateLocationEvent?.sampleTime! <
            b.event.onCreateLocationEvent?.sampleTime!
          ) {
            return 1
          }
          return -1
        })
        filter((v, index) => (index ?? 5) < 5)
      },
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [push, filter, sort])

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div aria-live="assertive" className="fixed inset-0 pointer-events-none ">
        <div className="flex items-end h-full max-w-screen-sm px-4 py-6 mx-auto sm:pt-20 sm:p-6 sm:items-start">
          <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
            <Transition
              show={list.length > 0}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="relative w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <button
                    className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => clear()}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center">
                    <div className="flex justify-between flex-1 w-0">
                      <div className="flex flex-col flex-1 w-0 space-y-2 text-xs font-medium text-gray-900">
                        {list.map(({ event }, index) => (
                          <ToastMessage
                            key={event.onCreateLocationEvent?.id}
                            {...{ event, removeAt, index }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </>
  )
}

function Map() {
  const [credentials, setCredentials] = useState<ICredentials | null>(null)
  const [info, setInfo] = useState<any>(null)

  const [viewport, setViewport] = useState<Partial<ViewportProps>>({
    ...mainLocation,
    zoom: 13,
  })

  const [marker, setMarker] = useState({
    longitude: mainLocation.longitude - 0.012,
    latitude: mainLocation.latitude - 0.012,
  })

  useEffect(() => {
    Auth.currentUserCredentials().then((creds) => setCredentials(creds))
    Auth.currentUserInfo().then((info) => setInfo(info))
  }, [])

  useEffect(() => {
    if (!credentials) return
    if (!info) return
    const fn = async () => {
      const client = new LocationClient({
        region: config.aws_project_region,
        credentials,
      })
      const result = await client.send(
        new BatchEvaluateGeofencesCommand({
          CollectionName,
          DevicePositionUpdates: [
            {
              DeviceId: info.username,
              Position: [marker.longitude, marker.latitude],
              SampleTime: new Date(),
            },
          ],
        })
      )
      console.log(`send result >`, JSON.stringify(result, null, 2))
    }
    fn()
  }, [credentials, marker, info])

  const transformRequest =
    (credentials: ICredentials) => (url?: string, resourceType?: string) => {
      // Resolve to an AWS URL
      if (resourceType === 'Style' && !url?.includes('://')) {
        url = `https://maps.geo.${config.aws_project_region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`
      }

      // Only sign AWS requests (with the signature as part of the query string)
      if (url?.includes('amazonaws.com')) {
        return {
          url: Signer.signUrl(url, {
            access_key: credentials.accessKeyId,
            secret_key: credentials.secretAccessKey,
            session_token: credentials.sessionToken,
          }),
        }
      }

      // Don't sign
      return { url: url || '' }
    }

  const onMarkerDragEnd = useCallback((event) => {
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    })
  }, [])

  return (
    <>
      <main className="">
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="overflow-hidden rounded">
              <div className="absolute inset-0">
                {credentials ? (
                  <ReactMapGL
                    {...viewport}
                    height="100%"
                    width="100%"
                    transformRequest={transformRequest(credentials)}
                    mapStyle={mapName}
                    onViewportChange={setViewport}
                  >
                    <div style={{ position: 'absolute', left: 20, top: 20 }}>
                      {/* react-map-gl v5 doesn't support dragging the compass to change bearing */}
                      <NavigationControl showCompass={false} />
                    </div>

                    <Marker
                      latitude={mainLocation.latitude}
                      longitude={mainLocation.longitude}
                      offsetLeft={-20}
                      offsetTop={-10}
                    >
                      <Popover className="relative">
                        <Popover.Button>
                          <StarIcon
                            className="flex-shrink-0 w-6 h-6 text-summer"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Popover.Panel className="w-48 p-2 text-xs bg-white rounded shadow-lg">
                          <div>
                            <h3 className="font-bold tracking-wide uppercase">
                              Autodromo Nazionale Monza
                            </h3>
                            <p className="mt-3">
                              Motor racing circuit with regular car & motorbike
                              races, & the chance to drive or be driven around.
                            </p>
                          </div>
                        </Popover.Panel>
                      </Popover>
                    </Marker>
                    <Marker
                      latitude={marker.latitude}
                      longitude={marker.longitude}
                      offsetLeft={-20}
                      offsetTop={-10}
                      draggable
                      onDragStart={console.log}
                      onDrag={console.log}
                      onDragEnd={onMarkerDragEnd}
                    >
                      <UserIcon
                        className="flex-shrink-0 w-6 h-6 text-red-500"
                        aria-hidden="true"
                      />
                    </Marker>
                    <Source id="circuit" type="geojson" data={data}>
                      <Layer {...dataLayer} />
                    </Source>
                    <Source id="attractions" type="geojson" data={attData}>
                      <Layer {...attDataLayer} />
                    </Source>
                  </ReactMapGL>
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Toast />
    </>
  )
}

export default Map
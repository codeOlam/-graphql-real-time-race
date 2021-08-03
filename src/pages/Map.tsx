import { useState, useEffect, useCallback } from 'react'
import { Auth } from 'aws-amplify'
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
import { StarIcon, UserIcon } from '@heroicons/react/solid'
import { Popover } from '@headlessui/react'
import {
  LocationClient,
  BatchEvaluateGeofencesCommand,
} from '@aws-sdk/client-location'
import monzaGeo from '../data/monza.geo.json'
import config from '../aws-exports'

const mapName = 'GraphQlRealTimeRacing'
const CollectionName = 'MonzaCircuit'
const data = monzaGeo as GeoJSON.FeatureCollection<GeoJSON.Geometry>

const dataLayer: LayerProps = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': 'red',
    'fill-opacity': 0.1,
  },
}
const mainLocation = {
  latitude: 45.621886,
  longitude: 9.284934,
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
                    <Source type="geojson" data={data}>
                      <Layer {...dataLayer} />
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
    </>
  )
}

export default Map

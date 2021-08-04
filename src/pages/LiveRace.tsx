import {
  useRef,
  Fragment,
  useState,
  useEffect,
  useCallback,
  FormEvent,
} from 'react'

import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {
  NavigationControl,
  Marker,
  ViewportProps,
  Source,
  Layer,
  LayerProps,
} from 'react-map-gl'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { StarIcon, UserIcon, XIcon, SunIcon } from '@heroicons/react/solid'

import { useForm } from 'react-hook-form'
import Observable from 'zen-observable'
import { sortBy } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import * as Queries from '../graphql/queries'
import {
  ListEventsQuery,
  Event as EEvent,
  RaceEvent,
  RaceEventsByEventIdQuery,
  OnReceiveRaceEventSubscription
} from '../API'

import { API, Auth, Storage } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { Signer, ICredentials } from '@aws-amplify/core'
import config from '../aws-exports'

import {
  LocationClient,
} from '@aws-sdk/client-location'


interface SubscriptionValue<T> {
  value: { data: T }
}

type GEvent = Omit<EEvent, '__typename'>

const mapName = 'GraphQlRealTimeRacing'
const mainLocation = {
  latitude: 45.621886,
  longitude: 9.284934,
}

const onReceiveRaceEvent = /* GraphQL */ `
  subscription OnReceiveRaceEvent($eventId: ID) {
    onReceiveRaceEvent(eventId: $eventId) {
      id
      eventId
      type
      competitor
      lap
      time
      position
      speed
      gear
      longitude
      latitude
      createdAt
      _version
      _deleted
      _lastChangedAt
      event {
        id
        title
      }
    }
  }
`

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const updateRaceEvents = (raceEvents: RaceEvent[], raceEvent: RaceEvent) => {
  const index = raceEvents.findIndex((m) => m.id === raceEvent.id)
  if (index > -1) {
    raceEvents.splice(index, 1, raceEvent)
    return raceEvents
  }
  return sortBy([...raceEvents, raceEvent], 'createdAt')
}

const LapPane = ({
  selected,
  raceEvents,
}: {
  selected: GEvent | null
  raceEvents: RaceEvent[]
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 bg-iris bg-opacity-40">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {selected?.title} - Official Timing
          </h3>
        </div>
      </div>
      <div className="px-4 py-5 border-t border-gray-200 divide-y divide-iris">
        {raceEvents.map((raceEvent) => raceEvent.type == "_lap" && (
            <LapItem key={raceEvent.id} {...{ raceEvent }} />
        ))}
      </div>
    </div>
  )
}

const LapItem = ({ raceEvent }: { raceEvent: RaceEvent }) => {
  return (
    <>
      <div className="flex items-center justify-between text-sm h-8 hover:bg-gray-100">
        <dt className="text-sm font-medium text-gray-500">LAP {raceEvent.lap}</dt>
        <dt className="text-sm font-medium text-gray-500">{raceEvent.time}</dt>
        <dt className="text-sm font-medium text-gray-500">DRIVER #{raceEvent.competitor}</dt>
      </div>
    </>
  )
}

const TelemetryPane = ({
  selected,
  lastEvent,
}: {
  selected: GEvent | null
  lastEvent: RaceEvent | null
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 bg-iris bg-opacity-40">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Official Telemetry
          </h3>
        </div>
      </div>
      <div className="px-4 py-5 border-t border-gray-200">
        {lastEvent != null && lastEvent.type == "_telemetry" && (
            <div className="flex items-center justify-between text-sm">
              <dt className="text-sm font-medium text-gray-500">
                GEAR: <span className="text-red-500">{lastEvent.gear}</span>
              </dt>
              <dt className="text-sm font-medium text-gray-500">
                SPEED: <span className="text-green-500">{lastEvent.speed} KM/H</span>
              </dt>
            </div>
        )}
        {
          lastEvent == null && (
            <div className="flex items-center justify-between text-sm">
              <dt className="text-sm font-medium text-gray-500">
                No Data Available
              </dt>
            </div>
          )
        }
      </div>
    </div>
  )
}

function Map({
  marker
}: {
  marker: any | null
}) {
  const [credentials, setCredentials] = useState<ICredentials | null>(null)
  const [info, setInfo] = useState<any>(null)

  const [viewport, setViewport] = useState<Partial<ViewportProps>>({
    ...mainLocation,
    zoom: 14,
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

  return (
    <>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="overflow-hidden rounded">
              <div className="relative inset-0 h-px min-h-screen">
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
                      offsetLeft={0}
                      offsetTop={0}
                    >
                    </Marker>
                    <Marker
                      latitude={marker?.latitude}
                      longitude={marker?.longitude}
                      offsetLeft={-20}
                      offsetTop={-10}
                    >
                      <SunIcon
                            className="flex-shrink-0 w-6 h-6 text-red-500"
                            aria-hidden="true"
                          />
                    </Marker>
                  </ReactMapGL>
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


function Select({
  events,
  selected,
  setSelected,
}: {
  events: GEvent[]
  selected: GEvent | null
  setSelected: (v: GEvent) => void
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              {selected ? (
                <span className="block truncate">{selected?.title}</span>
              ) : (
                <span className="block italic text-gray-500 trucate">
                  Select an event to get real-time data
                </span>
              )}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {events.map((event) => (
                  <Listbox.Option
                    key={event.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'group cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={event}
                  >
                    {({ selected, active }) => (
                      <>
                        <div
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          <span>{event.title} - </span>
                          <span className="text-xs text-gray-500 uppercase group-hover:text-white">
                            {new Date(event.date!).toLocaleString()}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}


function LiveRace() {
  const [events, setEvents] = useState<GEvent[]>([])
  const [selected, setSelected] = useState<GEvent | null>(null)
  const [raceEvents, setRaceEvents] = useState<RaceEvent[]>([])
  const [nextToken, setNextToken] =
    useState<string | undefined | null>(undefined)
  const [fetchNextToken, setFetchNextToken] =
    useState<string | undefined | null>(undefined)
    
  const [lastEvent, setLastEvent] = useState<RaceEvent | null>(null)
  const [marker, setMarker] = useState<any | null> (mainLocation)
    
  const pane = useRef<HTMLDivElement>(null)
  
  // fetch user info and list of events
  useEffect(() => {
    const prom = API.graphql({
      query: Queries.listEvents,
    }) as Promise<GraphQLResult<ListEventsQuery>>
    prom.then((result) => {
      // console.log(result)
      setEvents(
        (result.data?.listEvents?.items ?? []).map((item) => {
          return item as GEvent
        })
      )
    })

    return () => {}
  }, [])
  
  
  // fetch messages when an event is selected, then subscribe
  useEffect(() => {
    if (!selected) return
    setRaceEvents([])
    setFetchNextToken(null)
    setNextToken(null)
    setLastEvent(null)
    setMarker(mainLocation)

    console.log('first query')
    const prom = API.graphql({
      query: Queries.raceEventsByEventId,
      variables: {
        eventId: selected.id,
        sortDirection: 'DESC',
        limit: 100,
      },
    }) as Promise<GraphQLResult<RaceEventsByEventIdQuery>>

    prom
      .then((result) => {
        console.log(result)
        setNextToken(result.data?.raceEventsByEventId?.nextToken)
        setRaceEvents(
          (result.data?.raceEventsByEventId?.items ?? [])
            .reverse()
            .map((item) => item as RaceEvent)
        )
      })
      .then(() => {
        if (pane.current) {
          pane.current.scrollTop = pane.current.scrollHeight
        }
      })

    const sub = (
      API.graphql({
        query: onReceiveRaceEvent,
        variables: { eventId: selected.id },
      }) as unknown as Observable<
        SubscriptionValue<OnReceiveRaceEventSubscription>
      >
    ).subscribe({
      next: (resp) => {
        const raceEvent: RaceEvent = resp.value.data.onReceiveRaceEvent! as unknown as RaceEvent
        console.log(`the sub raceEvent >`, JSON.stringify(raceEvent, null, 2))
        let atBottom = false
        if (pane.current) {
          const window = pane.current.scrollHeight - pane.current.offsetHeight
          // console.log('before input text', pane.current.scrollTop, window)
          atBottom = pane.current.scrollTop === window
        }
        setRaceEvents((events) => updateRaceEvents(events, raceEvent))
        if(raceEvent.type == "_telemetry") {
          var eventToSet = raceEvent
          eventToSet.gear = raceEvent.gear != null ? raceEvent.gear : lastEvent?.gear
          eventToSet.speed = raceEvent.speed != null ? raceEvent.speed : lastEvent?.speed
          setLastEvent(eventToSet)
          setMarker({
            latitude: raceEvent.latitude,
            longitude: raceEvent.longitude
          })
        }
      },
    })

    return () => sub.unsubscribe()
  }, [selected])
  
  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Live Race
          </h2>
          <div className="flex-grow mt-3 sm:ml-22 sm:mt-0">
            <Select {...{ events, selected, setSelected }} />
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="h-full">
                <LapPane {...{ selected, raceEvents }} />
              </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="h-full">
                <TelemetryPane {...{ selected, lastEvent }} />
              </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="h-full">
                <Map {...{ marker }} />
              </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LiveRace

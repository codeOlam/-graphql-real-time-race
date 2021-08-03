import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'

import { ChevronRightIcon, SelectorIcon, CheckIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'
import { GetRacesQuery, Race as RacefromAPI, GetResultsQuery, Result as ResultFromAPI } from '../API'
import { getRaces, getResults } from '../graphql/queries'
import { useEffect, useState, Fragment } from 'react'

type Race = Omit<RacefromAPI, '__typename'>
type Result = Omit<ResultFromAPI, '__typename'>

type DriverInfo = { driverId: string; name: string }
const drivers: DriverInfo[] = [
  { driverId: 'aitken', name: 'Jack Aitken' },
  { driverId: 'albon', name: 'Alexander Albon' },
  { driverId: 'bottas', name: 'Valtteri Bottas' },
  { driverId: 'pietro_fittipaldi', name: 'Pietro Fittipaldi' },
  { driverId: 'gasly', name: 'Pierre Gasly' },
  { driverId: 'giovinazzi', name: 'Antonio Giovinazzi' },
  { driverId: 'grosjean', name: 'Romain Grosjean' },
  { driverId: 'hamilton', name: 'Lewis Hamilton' },
  { driverId: 'hulkenberg', name: 'Nico Hülkenberg' },
  { driverId: 'kvyat', name: 'Daniil Kvyat' },
  { driverId: 'latifi', name: 'Nicholas Latifi' },
  { driverId: 'leclerc', name: 'Charles Leclerc' },
  { driverId: 'kevin_magnussen', name: 'Kevin Magnussen' },
  { driverId: 'norris', name: 'Lando Norris' },
  { driverId: 'ocon', name: 'Esteban Ocon' },
  { driverId: 'perez', name: 'Sergio Pérez' },
  { driverId: 'raikkonen', name: 'Kimi Räikkönen' },
  { driverId: 'ricciardo', name: 'Daniel Ricciardo' },
  { driverId: 'russell', name: 'George Russell' },
  { driverId: 'sainz', name: 'Carlos Sainz' },
  { driverId: 'stroll', name: 'Lance Stroll' },
  { driverId: 'max_verstappen', name: 'Max Verstappen' },
  { driverId: 'vettel', name: 'Sebastian Vettel' },
]
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

const colorClass = (status?: string) => {
  if (status === 'Finished') return 'bg-green-100 text-green-800'
  if (status === 'Radiator') return 'bg-indigo-100 text-indigo-800'
  if (status === '+1 Lap') return 'bg-yellow-100 text-yellow-800'
  if (status?.startsWith('Collision')) return 'bg-red-100 text-red-800'

  return 'bg-gray-100 text-gray-800'
}

const location = (race: Race) => {
  const circuit = JSON.parse(race.Circuit!)
  const {
    Location: { locality, country },
  } = circuit
  return `${locality}, ${country}`
}

const track = (race: Race) => {
  const circuit = JSON.parse(race.Circuit!)
  return circuit.circuitName
}

function Select({ selected, setSelected }: { selected: DriverInfo | undefined; setSelected: (v: DriverInfo) => void }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              {selected ? (
                <span className="block truncate">{selected.name}</span>
              ) : (
                <span className="block italic text-gray-500 truncate">Select a driver to see results</span>
              )}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
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
                {drivers.map((driver) => (
                  <Listbox.Option
                    key={driver.driverId}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'group cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={driver}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          <span>{driver.name}</span>
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

function Account() {
  const [races, setRaces] = useState<Race[]>([])
  const [driver, setDriver] = useState<DriverInfo>()
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    if (!driver) return
    const prom = API.graphql({
      query: getResults,
      variables: { driverId: driver.driverId },
    }) as Promise<GraphQLResult<GetResultsQuery>>
    prom.then((result) => {
      console.log(result.data?.getResults)
      setResults(result.data?.getResults as unknown as Result[])
    })
  }, [driver])

  useEffect(() => {
    const prom = API.graphql({
      query: getRaces,
    }) as Promise<GraphQLResult<GetRacesQuery>>

    prom.then((result) => {
      console.log(result.data?.getRaces)
      setRaces((result.data?.getRaces as unknown as Race[]) ?? [])
    })
  }, [])
  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">2020 Schedule</h2>
        </div>
      </header>
      <main>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">Events</h2>
              </div>
              <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                {races.map((race) => (
                  <li key={`${race.PK}-${race.SK}`}>
                    <div className="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center space-x-3 truncate">
                        <span
                          className={classNames('bg-summer w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium leading-6 truncate">
                          {race.raceName}{' '}
                          <span className="font-normal text-gray-500 truncate">in {location(race)}</span>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/*  table (small breakpoint and up) */}
            <div className="hidden mt-8 sm:block">
              <div className="inline-block min-w-full align-middle border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-t border-gray-200">
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"></th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        <span className="lg:pl-2">Event</span>
                      </th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Track
                      </th>
                      <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50">
                        When
                      </th>
                      <th className="py-3 pr-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50" />
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {races
                      .map((race) => (
                        <tr key={`${race.PK}${race.SK}`}>
                          <td>
                            <div className="flex items-center space-x-3 lg:pl-2">
                              <div
                                className={classNames('bg-summer', 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                                aria-hidden="true"
                              />
                              <span className="flex-grow text-right">{race.round}</span>
                            </div>
                          </td>
                          <td className="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="truncate hover:text-gray-600">
                                <span>
                                  {race.raceName} <span className="font-normal text-gray-500">in {location(race)}</span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-xs font-medium text-gray-500">
                            <div className="flex items-center space-x-2">{track(race)}</div>
                          </td>
                          <td className="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap">
                            {race.date}
                          </td>
                          <td className="pr-6"></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight text-gray-900">Driver Positions</h2>
              <Select selected={driver} setSelected={setDriver} />
              {results.length > 0 && (
                <ul className="divide-y divide-gray-200">
                  {results
                    .sort((a, b) => (a.round! < b.round! ? -1 : 1))
                    .map((result) => {
                      const n = result.SK!.split('#')[1]
                      const race = races[result.round! - 1]
                      return (
                        <li key={`${result.PK}-${result.SK}-${result.driverId}`} className="flex py-4">
                          <div className="w-16 text-3xl text-right">{result.position}</div>
                          <div className="flex-shrink-0 ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              Round {race?.round} - {race?.raceName}
                            </p>
                            <p className="text-sm text-gray-500">{location(race!)}</p>
                            <div className="flex-grow text-sm sm:hidden">
                              <span
                                className={classNames(
                                  colorClass(result.status!),
                                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium '
                                )}
                              >
                                {result.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow hidden text-sm text-right sm:block">
                            <span
                              className={classNames(
                                colorClass(result.status!),
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium '
                              )}
                            >
                              {result.status}
                            </span>
                          </div>
                        </li>
                      )
                    })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Account

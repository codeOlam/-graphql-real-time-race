import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'

import { ChevronRightIcon } from '@heroicons/react/solid'

import { GetRacesQuery, Race as RacefromAPI } from '../API'
import { getRaces } from '../graphql/queries'
import { useEffect, useState } from 'react'

type Race = Omit<RacefromAPI, '__typename'>

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

const location = (race: Race) => {
  const circuit = JSON.parse(race.Circuit!)
  console.log(` circuit >`, JSON.stringify(circuit, null, 2))
  const {
    Location: { locality, country },
  } = circuit
  return `${locality}, ${country}`
}

const track = (race: Race) => {
  const circuit = JSON.parse(race.Circuit!)
  return circuit.circuitName
}

function Account() {
  const [races, setRaces] = useState<Race[]>([])

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
                        <tr key={`${race.PK}-${race.SK}`}>
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
          </div>
        </div>
      </main>
    </>
  )
}

export default Account
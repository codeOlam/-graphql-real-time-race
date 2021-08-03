import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { Event, StarredEvent } from '../models'
import {
  ThumbUpIcon,
  HeartIcon,
  EmojiHappyIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'
import sortBy from 'lodash/sortBy'
import keyBy from 'lodash/keyBy'

function EventPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [stars, setStars] = useState<{ [key: string]: StarredEvent }>({})
  useEffect(() => {
    DataStore.query(Event).then((events) => setEvents(sortBy(events, 'date')))

    DataStore.query(StarredEvent).then((stars) =>
      setStars(keyBy(stars, (s) => s.Event!.id))
    )

    const sub1 = DataStore.observe(Event).subscribe((msg) => {
      console.log(msg.opType, msg.element)
      DataStore.query(Event).then((events) => setEvents(sortBy(events, 'date')))
    })

    const sub2 = DataStore.observe(StarredEvent).subscribe((msg) => {
      console.log(msg.opType, msg.element)
      DataStore.query(StarredEvent).then((stars) =>
        setStars(keyBy(stars, (s) => s.Event!.id))
      )
    })

    return () => {
      sub1.unsubscribe()
      sub2.unsubscribe()
    }
  }, [])

  const getStar = (event: Event) => {
    return stars[event.id]
  }

  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Events
          </h2>
        </div>
      </header>
      <main>
        <div className="mx-auto">
          <div className="px-4 py-8 space-y-8">
            {events.map((event) => (
              <EventView key={event.id} event={event} star={getStar(event)} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

const EventView = ({ event, star }: { event: Event; star?: StarredEvent }) => {
  const date = new Date(event.date)

  const updateEvent = async (emotion: 'heart' | 'happy' | 'thumbsup') => {
    await DataStore.save(
      Event.copyOf(event, (updated) => {
        updated[emotion] = (event[emotion] ?? 0) + 1
      })
    )
  }

  const addStar = async () => {
    if (!star) await DataStore.save(new StarredEvent({ Event: event }))
  }

  const removeStar = async () => {
    if (star) await DataStore.delete(star)
  }

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 bg-iris bg-opacity-40">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {event.title}
          </h3>
          <div className="flex flex-row items-center">
            {star ? (
              <button onClick={removeStar}>
                <StarIcon
                  className="flex-shrink-0 w-6 h-6 text-yellow-500"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button onClick={addStar}>
                <StarIconOutline
                  className="flex-shrink-0 w-6 h-6 text-gray-500"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>
        <p className="max-w-2xl mt-1 text-xs text-gray-500">
          {date.toLocaleString()}
        </p>
      </div>
      <div className="px-4 py-5 border-t border-gray-200">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900">{event.description}</dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 bg-snow bg-opacity-10">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <ul className="flex flex-row space-x-4">
              <li className="flex items-center justify-between text-sm">
                <button
                  onClick={() => updateEvent('heart')}
                  className="flex flex-row items-center px-1 py-px space-x-2 rounded group focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-pink-300 focus:ring-offset-white"
                >
                  <span className="flex flex-row items-center justify-center p-1 rounded-full group-focus:animate-ping group-hover:bg-pink-200 group-hover:opacity-75">
                    <HeartIcon
                      className="flex-shrink-0 w-5 h-5 text-pink-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="group-hover:text-pink-500">
                    {event.heart}
                  </span>
                </button>
              </li>
              <li className="flex items-center justify-between text-sm">
                <button
                  onClick={() => updateEvent('thumbsup')}
                  className="flex flex-row items-center px-1 py-px space-x-2 rounded group focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-300 focus:ring-offset-white"
                >
                  <span className="flex flex-row items-center justify-center p-1 rounded-full group-focus:animate-ping group-hover:bg-green-200 group-hover:opacity-75">
                    <ThumbUpIcon
                      className="flex-shrink-0 w-5 h-5 text-green-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="group-hover:text-green-500">
                    {event.thumbsup}
                  </span>
                </button>
              </li>
              <li className="flex items-center justify-between text-sm">
                <button
                  onClick={() => updateEvent('happy')}
                  className="flex flex-row items-center px-1 py-px space-x-2 rounded group focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-yellow-300 focus:ring-offset-white"
                >
                  <span className="flex flex-row items-center justify-center p-1 rounded-full group-focus:animate-ping group-hover:bg-yellow-200 group-hover:opacity-75">
                    <EmojiHappyIcon
                      className="flex-shrink-0 w-5 h-5 text-yellow-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="group-hover:text-yellow-500">
                    {event.happy ?? 0}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default EventPage
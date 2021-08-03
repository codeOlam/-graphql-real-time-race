import { useRef, Fragment, useState, useEffect, useCallback } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { PaperClipIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'

import * as Queries from '../graphql/queries'
import { ListEventsQuery, MessagesByEventIdQuery } from '../API'
import { API, Auth } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'

import {
  OnMutateMessageSubscription,
  CreateMessageInput,
  CreateEventInput,
} from '../API'
import Observable from 'zen-observable'
import { sortBy, uniqBy } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

interface SubscriptionValue<T> {
  value: { data: T }
}
type Msg = CreateMessageInput
type GEvent = CreateEventInput

const onMutateMessage = /* GraphQL */ `
  subscription OnMutateMessage($eventId: ID) {
    onMutateMessage(eventId: $eventId) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
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
                  Select an event to start a chat
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
                            {new Date(event.date).toLocaleString()}
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

const InputBar = ({
  selected,
  addMessage,
  owner,
  pane,
  setAfterMsg,
}: {
  selected: GEvent | null
  addMessage: Function
  owner: string
  pane: React.RefObject<HTMLDivElement>
  setAfterMsg: Function
}) => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: { content: string }) => {
    console.log(data)
    const date = new Date()
    const msg: Msg = {
      id: uuidv4(),
      owner,
      content: data.content,
      eventId: selected?.id,
      createdAt: date.toISOString(),
    }
    let atBottom = false
    if (pane.current) {
      const window = pane.current.scrollHeight - pane.current.offsetHeight
      console.log('before input text', pane.current.scrollTop, window)
      atBottom = pane.current.scrollTop === window
    }
    addMessage(msg)
    setAfterMsg(atBottom)
    await API.graphql({
      query: createMessage,
      variables: { input: msg },
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row items-center p-2 space-x-4 bg-gray-100">
        <label
          className="items-center hidden w-6 h-6 ml-2 text-gray-700 bg-gray-100 rounded-full cursor-pointer hover:text-sky focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky focus-within:ring-offset-gray-100"
          htmlFor="file-upload"
          aria-haspopup="true"
        >
          <span className="sr-only">attach file</span>
          <span className="flex items-center justify-center flex-shrink-0 w-6 h-6">
            <PaperClipIcon className="w-5 h-5" />
          </span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept="image/*"
          />
        </label>
        <input
          type="text"
          disabled={selected === null}
          autoComplete="off"
          {...register('content', { required: true })}
          placeholder={
            selected
              ? 'Enter a message...'
              : 'Select an event to get started...'
          }
          className="flex-1 block w-full min-w-0 p-2 border-gray-300 rounded-sm focus:ring-sky focus:border-sky sm:text-sm"
        />
      </div>
    </form>
  )
}

const MessagePane = ({
  selected,
  messages,
}: {
  selected: GEvent | null
  messages: Msg[]
}) => {
  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id} className="p-2 space-y-1">
          <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-bold">{msg.owner}</div>
            <div className="text-xs text-gray-500 uppercase">
              {new Date(msg.createdAt!).toLocaleString()}
            </div>
          </div>
          <div>{msg.content}</div>
        </div>
      ))}
    </>
  )
}

function Chat() {
  const [owner, setOwner] = useState<string>()
  const [events, setEvents] = useState<GEvent[]>([])
  const [messages, setMessages] = useState<Msg[]>([])
  const [afterMsg, setAfterMsg] = useState(false)
  const [nextToken, setNextToken] =
    useState<string | undefined | null>(undefined)
  const [fetchNextToken, setFetchNextToken] =
    useState<string | undefined | null>(undefined)
  const [selected, setSelected] = useState<GEvent | null>(null)
  const pane = useRef<HTMLDivElement>(null)

  const addMessage = useCallback(
    (msg) => {
      setMessages((msgs) => uniqBy(sortBy([...msgs, msg], 'createdAt'), 'id'))
    },
    [setMessages]
  )

  // fetch user info and list of events
  useEffect(() => {
    Auth.currentUserInfo().then((data) => {
      setOwner(data.username)
    })

    const prom = API.graphql({
      query: Queries.listEvents,
    }) as Promise<GraphQLResult<ListEventsQuery>>
    prom.then((result) => {
      console.log(result)
      setEvents(
        (result.data?.listEvents?.items ?? []).map((item) => {
          return {
            id: item?.id,
            date: item?.date!,
            description: item?.description!,
            title: item?.title!,
            happy: item?.happy ?? 0,
            thumbsup: item?.thumbsup ?? 0,
            heart: item?.heart ?? 0,
          }
        })
      )
    })

    return () => {}
  }, [])

  // fetch messages when an event is selected, then subscribe
  useEffect(() => {
    if (!selected) return
    setMessages([])
    setFetchNextToken(null)
    setNextToken(null)

    console.log('first query')
    const prom = API.graphql({
      query: Queries.messagesByEventId,
      variables: {
        eventId: selected.id,
        sortDirection: 'DESC',
        limit: 20,
      },
    }) as Promise<GraphQLResult<MessagesByEventIdQuery>>

    prom
      .then((result) => {
        console.log(result)
        setNextToken(result.data?.messagesByEventId?.nextToken)
        setMessages(
          (result.data?.messagesByEventId?.items ?? [])
            .reverse()
            .map((item) => {
              return {
                id: item?.id,
                owner: item?.owner,
                content: item?.content!,
                createdAt: item?.createdAt,
              }
            })
        )
      })
      .then(() => {
        if (pane.current) {
          pane.current.scrollTop = pane.current.scrollHeight
        }
        // setAfterQuery(true)
      })

    const sub = (
      API.graphql({
        query: onMutateMessage,
        variables: { eventId: selected.id },
      }) as unknown as Observable<
        SubscriptionValue<OnMutateMessageSubscription>
      >
    ).subscribe({
      next: (resp) => {
        const msg: Msg = resp.value.data.onMutateMessage!
        // console.log(`the sub msg >`, JSON.stringify(msg, null, 2))
        let atBottom = false
        if (pane.current) {
          const window = pane.current.scrollHeight - pane.current.offsetHeight
          console.log('before input text', pane.current.scrollTop, window)
          atBottom = pane.current.scrollTop === window
        }
        setMessages((msgs) => uniqBy(sortBy([...msgs, msg], 'createdAt'), 'id'))
        setAfterMsg(atBottom)
      },
    })

    return () => sub.unsubscribe()
  }, [selected])

  // fetch next set of messages
  useEffect(() => {
    if (!selected || !fetchNextToken) return

    console.log('fetching next token', fetchNextToken)

    const cpaneHeight = pane.current?.scrollHeight

    const prom = API.graphql({
      query: Queries.messagesByEventId,
      variables: {
        eventId: selected.id,
        sortDirection: 'DESC',
        nextToken: fetchNextToken,
        limit: 20,
      },
    }) as Promise<GraphQLResult<MessagesByEventIdQuery>>

    prom
      .then((result) => {
        console.log(result)
        setNextToken(result.data?.messagesByEventId?.nextToken)
        setMessages((messages) => {
          const newMsgs = (result.data?.messagesByEventId?.items ?? [])
            .reverse()
            .map((item) => {
              return {
                id: item?.id,
                owner: item?.owner,
                content: item?.content!,
                createdAt: item?.createdAt,
              }
            })
          return sortBy([...messages, ...newMsgs], 'createdAt')
        })
      })
      .then(() => {
        console.log('n pane height', pane.current?.scrollHeight)
        if (pane.current) {
          pane.current.scrollTop =
            pane.current.scrollHeight - (cpaneHeight ?? 0)
        }
      })
      .finally(() => setFetchNextToken(null))
  }, [selected, fetchNextToken])

  // pin window to bottom when receiving a new message
  useEffect(() => {
    const max = pane.current
      ? pane.current.scrollHeight - pane.current.offsetHeight
      : 0
    console.log('afterMsg >', afterMsg, max)
    if (pane.current && afterMsg) {
      pane.current.scrollTop = max
    }
    setAfterMsg(false)
  }, [afterMsg])

  return (
    <>
      <div className="absolute inset-0 flex flex-col">
        <header className="flex-shrink-0 py-4">
          <div className="flex flex-col justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-row sm:items-center">
            <h2 className="flex-shrink-0 text-2xl font-bold leading-tight text-gray-900">
              Chat
            </h2>
            <div className="flex-grow mt-4 sm:ml-24 sm:mt-0">
              <Select {...{ events, selected, setSelected }} />
            </div>
          </div>
        </header>
        <div className="relative flex flex-col flex-1 flex-grow pt-4 overflow-hidden main">
          <div className="absolute inset-x-0 top-0 flex flex-row justify-center pt-2">
            {fetchNextToken ? (
              <div className="px-2 py-1 mx-auto text-xs bg-yellow-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                fetching
              </div>
            ) : (
              nextToken && (
                <button
                  onClick={() => setFetchNextToken(nextToken)}
                  className="px-2 py-1 mx-auto text-xs bg-gray-100 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  more messages
                </button>
              )
            )}
          </div>
          <div
            ref={pane}
            className="flex flex-col justify-end flex-grow px-4 overflow-y-auto"
          >
            <>
              <div className="h-full">
                <MessagePane {...{ selected, messages }} />
              </div>
            </>
          </div>
          <div className="flex-shrink-0">
            {owner && (
              <InputBar
                {...{ selected, addMessage, owner, pane, setAfterMsg }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
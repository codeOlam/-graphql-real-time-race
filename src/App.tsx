import { Fragment, useEffect, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import Map from './pages/Map'
import Chat from './pages/Chat'
import LiveRace from './pages/LiveRace'
import Home from './pages/Home'
import EventPage from './pages/Events'
import Account from './pages/Account'

import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Main() {
  const [open, setOpen] = useState(false)
  const location = useLocation<{ modal: boolean }>()
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-shrink-0">
        <div className="p-4 mx-auto text-white bg-sky">
          <div className="relative flex items-center justify-center py-1">
            {/* Logo */}
            <div className="absolute left-0 flex-shrink-0 ">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-8"
                  src="/appsync-icon.png"
                  alt="appsync"
                />
              </Link>
            </div>

            <div className="text-lg font-bold tracking-wide">
              <h1>GraphQl Real-time Racing</h1>
            </div>

            {/* Menu button */}
            <div className="absolute right-0 flex-shrink-0 -mr-2">
              {/* Mobile menu button */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center justify-center p-2 text-white rounded-md bg-sky hover:text-gray-100 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-sky"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" static className="" open={open} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 z-20 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute inset-x-0 top-0 z-30 w-full max-w-screen-sm p-2 mx-auto transition origin-top transform">
                <div className="bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="pt-3 pb-2">
                    <div className="flex items-center justify-between px-4">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="./appsync-icon.png"
                          alt="AppSync"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={() => setOpen(false)}
                          className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="px-2 mt-3 space-y-1">
                      <Link
                        to="/"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        Home
                      </Link>
                      <Link
                        to="/events"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        Events
                      </Link>
                      <Link
                        to="/account"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        My Account
                      </Link>
                      <Link
                        to="/map"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        Map
                      </Link>
                      <Link
                        to="/chat"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        Chat
                      </Link>
                      <Link
                        to="/live"
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      >
                        Live Race
                      </Link>
                      <button
                        onClick={() => {
                          Auth.signOut()
                          window.location.reload()
                        }}
                        className="block w-full px-3 py-2 text-base font-medium text-gray-900 rounded-md bg-summer hover:bg-gray-100 hover:text-gray-800"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>

      <div className="relative flex-1 flex-grow py-10">
        <Switch>
          <Route path="/events">
            <EventPage />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/live">
            <LiveRace />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    Auth.currentUserInfo().then((data) => {
      console.log(`user data >`, JSON.stringify(data, null, 2))
    })
  }, [])
  return (
    <Router>
      <div className="font-sans App bg-gray-50">
        <div className="max-w-screen-sm mx-auto shell">
          <Main />
        </div>
      </div>
    </Router>
  )
}

export default withAuthenticator(App)

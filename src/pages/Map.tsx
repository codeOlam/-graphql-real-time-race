import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Signer, ICredentials } from '@aws-amplify/core'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, {
  NavigationControl,
  Marker,
  ViewportProps,
} from 'react-map-gl'
import { StarIcon } from '@heroicons/react/solid'
import { Popover } from '@headlessui/react'

import config from '../aws-exports'

const mapName = 'GraphQlRealTimeRacing'

const mainLocation = {
  latitude: 45.621886,
  longitude: 9.284934,
}
function Map() {
  const [credentials, setCredentials] = useState<ICredentials | null>(null)

  const [viewport, setViewport] = useState<Partial<ViewportProps>>({
    ...mainLocation,
    zoom: 13,
  })

  useEffect(() => {
    Auth.currentUserCredentials().then((creds) => setCredentials(creds))
  }, [])

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

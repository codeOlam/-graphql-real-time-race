// MIT No Attribution

// Copyright 2021

// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/* Amplify Params - DO NOT EDIT
	API_GRAPHQLREALTIMERACE_GRAPHQLAPIENDPOINTOUTPUT
	API_GRAPHQLREALTIMERACE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const https = require('https')
const AWS = require('aws-sdk')
const urlParse = require('url').URL
const region = process.env.REGION
const appsyncUrl = process.env.API_GRAPHQLREALTIMERACE_GRAPHQLAPIENDPOINTOUTPUT

const request = (queryDetails, appsyncUrl, apiKey) => {
  const req = new AWS.HttpRequest(appsyncUrl, region)
  const endpoint = new urlParse(appsyncUrl).hostname.toString()

  req.method = 'POST'
  req.path = '/graphql'
  req.headers.host = endpoint
  req.headers['Content-Type'] = 'application/json'
  req.body = JSON.stringify(queryDetails)

  if (apiKey) {
    req.headers['x-api-key'] = apiKey
  } else {
    const signer = new AWS.Signers.V4(req, 'appsync', true)
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate())
  }

  return new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      result.on('data', (data) => {
        resolve(JSON.parse(data.toString()))
      })
    })

    httpRequest.write(req.body)
    httpRequest.end()
  })
}

const createLocationEventMutation = /* GraphQL */ `
  mutation CreateLocationEvent(
    $input: CreateLocationEventInput!
    $condition: ModelLocationEventConditionInput
  ) {
    createLocationEvent(input: $input, condition: $condition) {
      id
      type
      geofenceId
      deviceId
      sampleTime
      longitude
      latitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`
exports.handler = async (event) => {
  console.log('new location event:', event)
  var result = await request(
    {
      query: createLocationEventMutation,
      variables: {
        input: {
          type: event.detail.EventType,
          geofenceId: event.detail.GeofenceId,
          deviceId: event.detail.DeviceId,
          sampleTime: event.detail.SampleTime,
          longitude: event.detail.Position[1],
          latitude: event.detail.Position[0],
        },
      },
    },
    appsyncUrl
  )
  console.log('appsync result', result)
}

/* Amplify Params - DO NOT EDIT
	ANALYTICS_GRAPHQLREALTIMERACEKINESIS_KINESISSTREAMARN
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

const createRaceEventMutation = /* GraphQL */ `
  mutation CreateRaceEvent(
    $input: CreateRaceEventInput!
    $condition: ModelRaceEventConditionInput
  ) {
    createRaceEvent(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`


exports.handler = async (event) => {
  
  console.log('new race event:', event)
  
  console.log('Preprocess function received event: ');
  console.log(event);
  try {
    await Promise.all(
      event.Records.map(async(record) => {
        var payload = Buffer.from(record.kinesis.data, 'base64').toString();
        var recordJSON = JSON.parse(payload)
        var inputEvent = {
          eventId: recordJSON.eventId,
          type: recordJSON.type,
          competitor: recordJSON.competitor,
          lap: recordJSON.lap
        }
      
        if(recordJSON.time != null && recordJSON.time !=="") {
          inputEvent.time = recordJSON.time
        }
        if(recordJSON.position != null) {
          inputEvent.position = recordJSON.position
        }
        if(recordJSON.longitude != null) {
          inputEvent.longitude = recordJSON.longitude
        }
        if(recordJSON.latitude != null) {
          inputEvent.latitude = recordJSON.latitude
        }
        if(recordJSON.speed != null) {
          inputEvent.speed = recordJSON.speed
        }
        if(recordJSON.gear != null) {
          inputEvent.gear = recordJSON.gear
        }
      
        var result = await request(
        {
          query: createRaceEventMutation,
          variables: {
            input: inputEvent
          },
        },
        appsyncUrl
       )
       console.log('appsync result', result)
        
     })
    )
  } catch(e) {
    console.log('error catched: ');
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        payload: e
      }),
      headers: {
          "Access-Control-Allow-Origin": "*",
      }
    }
  }
}
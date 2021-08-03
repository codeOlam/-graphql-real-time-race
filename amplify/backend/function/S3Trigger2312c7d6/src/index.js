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
const sharp = require('sharp')
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

const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      original {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`
const s3 = new AWS.S3()
const PARSER =
  /^protected\/(?<identityId>[^/]+)\/(?<eventId>[^/]+)\/(?<type>original|thumbnail)\/(?<mediaId>[^/]+)\.\w+$/
const WORDS = { ORIGINAL: 'original', THUMBNAIL: 'thumbnail' }

const handleOriginalEvent = async ({ bucket, key, region, parts }) => {
  try {
    const params = { Bucket: bucket, Key: key }
    console.log(` params >`, JSON.stringify(params, null, 2))
    const head = await s3.headObject(params).promise()
    const {
      Metadata: { messageid },
    } = head
    console.log(`head for ${key} >`, JSON.stringify(head, null, 2))

    // create thumbnail and upload to s3
    const transformer = sharp().webp()
    const readableStream = s3.getObject(params).createReadStream()
    const tKey = key
      .replace(WORDS.ORIGINAL, WORDS.THUMBNAIL)
      .replace(/\.\w+$/, '.webp')
    await s3
      .upload({
        ...params,
        Key: tKey,
        Body: readableStream.pipe(transformer),
      })
      .promise()

    const input = {
      id: messageid,
      original: {
        bucket,
        region,
        key,
      },
      thumbnail: {
        bucket,
        region,
        key: tKey,
      },
    }

    console.log(`updateMessage input >`, JSON.stringify(input, null, 2))

    const result = await request(
      {
        query: updateMessage,
        variables: { input },
      },
      appsyncUrl
    )

    console.log(`updateMessage result >`, JSON.stringify(result, null, 2))
    console.log('DONE')
  } catch (error) {
    console.log('error >', JSON.stringify(error, null, 2))
  }
}
const handleThumbnailEvent = () => {
  console.log('END')
}

exports.handler = async (event) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2))
  for (let index = 0; index < event.Records.length; index++) {
    const record = event.Records[index]

    if (record.eventName !== 'ObjectCreated:Put') {
      console.log('unexpected event')
      continue
    }

    const bucket = record.s3.bucket.name
    const key = decodeURIComponent(record.s3.object.key)
    console.log(`Bucket: ${bucket}`, `Key: ${key}`)

    const match = key.match(PARSER)
    if (!match) {
      console.log('unexpected key', key)
      continue
    }

    console.log('match >', JSON.stringify(match, null, 2))
    console.log('match.groups >', JSON.stringify(match.groups, null, 2))

    if (WORDS.ORIGINAL === match.groups?.type) {
      await handleOriginalEvent({
        bucket,
        key,
        region: record.awsRegion,
        parts: match.groups,
      })
    }
    if (WORDS.THUMBNAIL === match.groups?.type) {
      handleThumbnailEvent()
    }
  }
}


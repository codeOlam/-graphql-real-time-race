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
	ENV
	REGION
	STORAGE_RACERESULTS_ARN
	STORAGE_RACERESULTS_NAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.REGION })
const TableName = process.env.STORAGE_RACERESULTS_NAME
const IndexName = 'ByDriverGSI'

exports.handler = async (event) => {
  console.log(`input event >`, JSON.stringify(event, null, 2))
  const response = await docClient
    .query({
      TableName,
      IndexName,
      ExpressionAttributeNames: { '#d': 'driverId' },
      ExpressionAttributeValues: { ':v': event.arguments.driverId },
      KeyConditionExpression: '#d = :v',
    })
    .promise()

  console.log(` response >`, JSON.stringify(response, null, 2))
  return response.Items
}

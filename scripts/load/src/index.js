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

const AWS = require('aws-sdk')
const fs = require('fs')
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: "us-east-2" })
const TableName = `${"raceresults" ?? 'raceresults'}-${"staging" ?? 'dev'}`

const loadFile = (file) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  console.log(`loading ${file} with ${data.length} rows`)
  return data.map((Item) => docClient.put({ TableName, Item }).promise())
}

const handler = async (event) => {
  try {
    let reqs = []
    reqs = loadFile('./drivers2020.json')
    reqs = [...reqs, ...loadFile('./races2020.json')]
    reqs = [...reqs, ...loadFile('./results2020.json')]
    const results = await Promise.allSettled(reqs)
    const failed = results.filter((r) => r.status !== 'fulfilled')
    if (failed.length) {
      console.log(`failed >`, JSON.stringify(failed, null, 2))
    }
    console.log('done')
  } catch (error) {
    console.log(` error >`, JSON.stringify(error, null, 2))
  }
}

handler()

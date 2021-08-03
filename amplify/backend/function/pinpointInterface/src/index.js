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
const pinpointemail = new AWS.PinpointEmail({ region: 'us-east-1' })

const getBody = (recipient, owner, text) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
Hi ${recipient},<br/>
${owner} sent you a message while you were away:
<p><i>${text}</i></p>
</body>
</html>`
}

const getText = (recipient, owner, text) => {
  return ` Hi ${recipient},

${owner} sent you a message while you were away:

${text}
`
}

var charset = 'UTF-8'
const subject = 'GRAPHQL REAL-TIME RACE WORKSHOP - Notification'
const address = 'projectdev24@gmail.com'
exports.handler = async (event) => {
  console.log(` received event >`, JSON.stringify(event, null, 2))

  for (let i = 0; i < event.Records.length; i++) {
    const content = event.Records[i].dynamodb.NewImage.content.S
    const owner = event.Records[i].dynamodb.NewImage.owner.S
    const match = content.match(/^@(\w+) (.*)$/)
    console.log(content, owner, match)
    if (!match) continue

    const recipient = match[1]
    const text = match[2]
    const params = {
      FromEmailAddress: address,
      Destination: {
        ToAddresses: [address],
      },
      Content: {
        Simple: {
          Body: {
            Html: {
              Data: getBody(recipient, owner, text),
              Charset: charset,
            },
            Text: {
              Data: getText(recipient, owner, text),
              Charset: charset,
            },
          },
          Subject: {
            Data: subject,
            Charset: charset,
          },
        },
      },
    }

    const result = await pinpointemail.sendEmail(params).promise()
    console.log(`email result >`, JSON.stringify(result, null, 2))
  }
}

/* Amplify Params - DO NOT EDIT
	API_GRAPHQLREALTIMERACE_GRAPHQLAPIENDPOINTOUTPUT
	API_GRAPHQLREALTIMERACE_GRAPHQLAPIIDOUTPUT
	API_GRAPHQLREALTIMERACE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */// eslint-disable-next-line
exports.handler = async function (event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
};

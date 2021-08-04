const stateMachineArn = process.env.STATEMACHINE_ARN;
const region = process.env.REGION;
const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async(event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  var results = [];
  await Promise.all(
    event.Records.map(async(record) => {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log('DynamoDB Record: %j', record.dynamodb);
      var unmarshalledNewImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);
      console.log('unmarshalledNewImage: %j', unmarshalledNewImage);
      console.log('stepfunctions');
      console.log(stepfunctions);
      if(record.eventName == "INSERT") {
        console.log("inseriting new execution");
        const result = await stepfunctions.startExecution({
                  stateMachineArn,
                  input: JSON.stringify({
                      planned_race_start: unmarshalledNewImage.date, 
                      race: {
                        eventID: unmarshalledNewImage.id
                      }
                  }),
              }).promise();
        console.log('result: %j', result);
        results.push(result);  
      }
    })
  )
  return {
      results: results
    };
};

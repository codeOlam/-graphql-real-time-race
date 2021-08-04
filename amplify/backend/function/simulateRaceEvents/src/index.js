/* Amplify Params - DO NOT EDIT
	ANALYTICS_GRAPHQLREALTIMERACEKINESIS_KINESISSTREAMARN
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const streamARN = process.env.ANALYTICS_GRAPHQLREALTIMERACEKINESIS_KINESISSTREAMARN; 
const streamName = streamARN.match(/([^\/]*)\/*$/)[1]
const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis({
    region: process.env.REGION
});

var telemetryData = require('./telemetry');
var lapData = require('./events');


function wait(milleseconds) {
  return new Promise(resolve => setTimeout(resolve, milleseconds))
}

exports.handler = async (event,context, callback) => {
    
    console.log('SIMULATION FUNCTION GOT EVENT: ');
    console.log(JSON.stringify(event,null,2));
    
    var simulatedRaceLastEventIndex = event.status != null ? event.status : 0;
    if(simulatedRaceLastEventIndex < lapData.events.length) {
        var record = lapData.events[simulatedRaceLastEventIndex];
        record.eventId = event.race.eventID;
        
        for (var telemetry in telemetryData.events) {
            var type = '_telemetry';
            console.log('KINESIS PUT RECORD as: ');
            var telemetryRecord = telemetryData.events[telemetry];
            telemetryRecord.type = type
            telemetryRecord.lap = record.lap;
            telemetryRecord.eventId = record.eventId;
            telemetryRecord.competitor = record.competitor;
            console.log(JSON.stringify(telemetryRecord,null,2));
            const data = await kinesis.putRecord({
                Data: JSON.stringify(telemetryRecord),
                PartitionKey: record.eventId + type,
                StreamName: streamName
            }).promise();
            await wait(760);
        }
        
        console.log('KINESIS PUT RECORD as: ');
        console.log(JSON.stringify(record,null,2));
        const data = await kinesis.putRecord({
            Data: JSON.stringify(record),
            PartitionKey: record.eventId + record.type,
            StreamName: streamName
        }).promise();
        console.log('KINESIS PUT RECORD DATA IS: ');
        console.log(JSON.stringify(data,null,2));
        simulatedRaceLastEventIndex++;
        console.log('returning simulatedRaceLastEventIndex: ' + simulatedRaceLastEventIndex);    
    } else {
        simulatedRaceLastEventIndex = "completed";
    }
    
    callback(null, simulatedRaceLastEventIndex);
};

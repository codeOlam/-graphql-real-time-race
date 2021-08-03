// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarredEvent, Event, LocationEvent, Message, Race, Result, Constructor, Driver, Lap, Speed, LapTime, S3Object } = initSchema(schema);

export {
  StarredEvent,
  Event,
  LocationEvent,
  Message,
  Race,
  Result,
  Constructor,
  Driver,
  Lap,
  Speed,
  LapTime,
  S3Object
};
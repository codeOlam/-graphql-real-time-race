// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Event, StarredEvent, LocationEvent, Race, Result, Constructor, Driver, Lap, Speed, LapTime } = initSchema(schema);

export {
  Message,
  Event,
  StarredEvent,
  LocationEvent,
  Race,
  Result,
  Constructor,
  Driver,
  Lap,
  Speed,
  LapTime
};
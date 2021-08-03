// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarredEvent, Event, LocationEvent, Race, Result, Constructor, Driver, Lap, Speed, LapTime } = initSchema(schema);

export {
  StarredEvent,
  Event,
  LocationEvent,
  Race,
  Result,
  Constructor,
  Driver,
  Lap,
  Speed,
  LapTime
};
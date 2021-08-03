// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarredEvent, Event, Race, Result, Constructor, Driver, Lap, Speed, LapTime } = initSchema(schema);

export {
  StarredEvent,
  Event,
  Race,
  Result,
  Constructor,
  Driver,
  Lap,
  Speed,
  LapTime
};
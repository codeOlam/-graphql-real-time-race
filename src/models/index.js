// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarredEvent, Event } = initSchema(schema);

export {
  StarredEvent,
  Event
};
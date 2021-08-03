import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly heart?: number;
  readonly thumbsup?: number;
  readonly happy?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}
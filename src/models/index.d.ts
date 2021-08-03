import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Race {
  readonly PK?: string;
  readonly SK?: string;
  readonly raceName?: string;
  readonly round?: number;
  readonly season?: string;
  readonly date?: string;
  readonly time?: string;
  readonly url?: string;
  readonly Circuit?: string;
  constructor(init: ModelInit<Race>);
}

type StarredEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class StarredEvent {
  readonly id: string;
  readonly owner?: string;
  readonly Event?: Event;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StarredEvent, StarredEventMetaData>);
  static copyOf(source: StarredEvent, mutator: (draft: MutableModel<StarredEvent, StarredEventMetaData>) => MutableModel<StarredEvent, StarredEventMetaData> | void): StarredEvent;
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
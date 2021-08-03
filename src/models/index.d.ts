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

export declare class Result {
  readonly Constructor?: Constructor;
  readonly Driver?: Driver;
  readonly FastestLap?: Lap;
  readonly driverId?: string;
  readonly grid?: string;
  readonly laps?: string;
  readonly number?: string;
  readonly PK?: string;
  readonly points?: string;
  readonly position?: string;
  readonly positionText?: string;
  readonly round?: number;
  readonly SK?: string;
  readonly status?: string;
  constructor(init: ModelInit<Result>);
}

export declare class Constructor {
  readonly constructorId?: string;
  readonly name?: string;
  readonly nationality?: string;
  readonly url?: string;
  constructor(init: ModelInit<Constructor>);
}

export declare class Driver {
  readonly code?: string;
  readonly dateOfBirth?: string;
  readonly driverId?: string;
  readonly familyName?: string;
  readonly givenName?: string;
  readonly nationality?: string;
  readonly permanentNumber?: string;
  readonly url?: string;
  constructor(init: ModelInit<Driver>);
}

export declare class Lap {
  readonly AverageSpeed?: Speed;
  readonly lap?: string;
  readonly rank?: string;
  readonly Time?: LapTime;
  constructor(init: ModelInit<Lap>);
}

export declare class Speed {
  readonly speed?: string;
  readonly units?: string;
  constructor(init: ModelInit<Speed>);
}

export declare class LapTime {
  readonly time?: string;
  constructor(init: ModelInit<LapTime>);
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
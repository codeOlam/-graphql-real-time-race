/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStarredEventInput = {
  id?: string | null,
  owner?: string | null,
  _version?: number | null,
  starredEventEventId?: string | null,
};

export type ModelStarredEventConditionInput = {
  and?: Array< ModelStarredEventConditionInput | null > | null,
  or?: Array< ModelStarredEventConditionInput | null > | null,
  not?: ModelStarredEventConditionInput | null,
};

export type StarredEvent = {
  __typename: "StarredEvent",
  id: string,
  owner?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Event?: Event | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  title: string,
  date: string,
  description: string,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStarredEventInput = {
  id: string,
  owner?: string | null,
  _version?: number | null,
  starredEventEventId?: string | null,
};

export type DeleteStarredEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventInput = {
  id?: string | null,
  title: string,
  date: string,
  description: string,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version?: number | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heart?: ModelIntInput | null,
  thumbsup?: ModelIntInput | null,
  happy?: ModelIntInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  description?: string | null,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version?: number | null,
};

export type DeleteEventInput = {
  id: string,
  _version?: number | null,
};

export type Race = {
  __typename: "Race",
  PK?: string | null,
  SK?: string | null,
  raceName?: string | null,
  round?: number | null,
  season?: string | null,
  date?: string | null,
  time?: string | null,
  url?: string | null,
  Circuit?: string | null,
};

export type Result = {
  __typename: "Result",
  Constructor?: Constructor | null,
  Driver?: Driver | null,
  FastestLap?: Lap | null,
  driverId?: string | null,
  grid?: string | null,
  laps?: string | null,
  number?: string | null,
  PK?: string | null,
  points?: string | null,
  position?: string | null,
  positionText?: string | null,
  round?: number | null,
  SK?: string | null,
  status?: string | null,
};

export type Constructor = {
  __typename: "Constructor",
  constructorId?: string | null,
  name?: string | null,
  nationality?: string | null,
  url?: string | null,
};

export type Driver = {
  __typename: "Driver",
  code?: string | null,
  dateOfBirth?: string | null,
  driverId?: string | null,
  familyName?: string | null,
  givenName?: string | null,
  nationality?: string | null,
  permanentNumber?: string | null,
  url?: string | null,
};

export type Lap = {
  __typename: "Lap",
  AverageSpeed?: Speed | null,
  lap?: string | null,
  rank?: string | null,
  Time?: LapTime | null,
};

export type Speed = {
  __typename: "Speed",
  speed?: string | null,
  units?: string | null,
};

export type LapTime = {
  __typename: "LapTime",
  time?: string | null,
};

export type ModelStarredEventFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelStarredEventFilterInput | null > | null,
  or?: Array< ModelStarredEventFilterInput | null > | null,
  not?: ModelStarredEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStarredEventConnection = {
  __typename: "ModelStarredEventConnection",
  items?:  Array<StarredEvent | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heart?: ModelIntInput | null,
  thumbsup?: ModelIntInput | null,
  happy?: ModelIntInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateStarredEventMutationVariables = {
  input: CreateStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type CreateStarredEventMutation = {
  createStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateStarredEventMutationVariables = {
  input: UpdateStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type UpdateStarredEventMutation = {
  updateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteStarredEventMutationVariables = {
  input: DeleteStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type DeleteStarredEventMutation = {
  deleteStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRacesQuery = {
  getRaces?:  Array< {
    __typename: "Race",
    PK?: string | null,
    SK?: string | null,
    raceName?: string | null,
    round?: number | null,
    season?: string | null,
    date?: string | null,
    time?: string | null,
    url?: string | null,
    Circuit?: string | null,
  } | null > | null,
};

export type GetResultsQueryVariables = {
  driverId: string,
};

export type GetResultsQuery = {
  getResults?:  Array< {
    __typename: "Result",
    Constructor?:  {
      __typename: "Constructor",
      constructorId?: string | null,
      name?: string | null,
      nationality?: string | null,
      url?: string | null,
    } | null,
    Driver?:  {
      __typename: "Driver",
      code?: string | null,
      dateOfBirth?: string | null,
      driverId?: string | null,
      familyName?: string | null,
      givenName?: string | null,
      nationality?: string | null,
      permanentNumber?: string | null,
      url?: string | null,
    } | null,
    FastestLap?:  {
      __typename: "Lap",
      lap?: string | null,
      rank?: string | null,
    } | null,
    driverId?: string | null,
    grid?: string | null,
    laps?: string | null,
    number?: string | null,
    PK?: string | null,
    points?: string | null,
    position?: string | null,
    positionText?: string | null,
    round?: number | null,
    SK?: string | null,
    status?: string | null,
  } | null > | null,
};

export type GetResults2QueryVariables = {
  driverId: string,
};

export type GetResults2Query = {
  getResults2?:  Array< {
    __typename: "Result",
    Constructor?:  {
      __typename: "Constructor",
      constructorId?: string | null,
      name?: string | null,
      nationality?: string | null,
      url?: string | null,
    } | null,
    Driver?:  {
      __typename: "Driver",
      code?: string | null,
      dateOfBirth?: string | null,
      driverId?: string | null,
      familyName?: string | null,
      givenName?: string | null,
      nationality?: string | null,
      permanentNumber?: string | null,
      url?: string | null,
    } | null,
    FastestLap?:  {
      __typename: "Lap",
      lap?: string | null,
      rank?: string | null,
    } | null,
    driverId?: string | null,
    grid?: string | null,
    laps?: string | null,
    number?: string | null,
    PK?: string | null,
    points?: string | null,
    position?: string | null,
    positionText?: string | null,
    round?: number | null,
    SK?: string | null,
    status?: string | null,
  } | null > | null,
};

export type GetStarredEventQueryVariables = {
  id: string,
};

export type GetStarredEventQuery = {
  getStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListStarredEventsQueryVariables = {
  filter?: ModelStarredEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStarredEventsQuery = {
  listStarredEvents?:  {
    __typename: "ModelStarredEventConnection",
    items?:  Array< {
      __typename: "StarredEvent",
      id: string,
      owner?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStarredEventsQueryVariables = {
  filter?: ModelStarredEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStarredEventsQuery = {
  syncStarredEvents?:  {
    __typename: "ModelStarredEventConnection",
    items?:  Array< {
      __typename: "StarredEvent",
      id: string,
      owner?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStarredEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStarredEventSubscription = {
  onCreateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateStarredEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStarredEventSubscription = {
  onUpdateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteStarredEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStarredEventSubscription = {
  onDeleteStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

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
  Event?: Event | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
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

export type UpdateLocationEventInput = {
  id: string,
  type?: string | null,
  geofenceId?: string | null,
  deviceId?: string | null,
  sampleTime?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  _version?: number | null,
};

export type ModelLocationEventConditionInput = {
  type?: ModelStringInput | null,
  geofenceId?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  sampleTime?: ModelStringInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  and?: Array< ModelLocationEventConditionInput | null > | null,
  or?: Array< ModelLocationEventConditionInput | null > | null,
  not?: ModelLocationEventConditionInput | null,
};

export type ModelFloatInput = {
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

export type LocationEvent = {
  __typename: "LocationEvent",
  id: string,
  type?: string | null,
  geofenceId?: string | null,
  deviceId?: string | null,
  sampleTime?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type DeleteLocationEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  owner?: string | null,
  content: string,
  eventId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  original?: S3ObjectInput | null,
  thumbnail?: S3ObjectInput | null,
  _version?: number | null,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
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

export type Message = {
  __typename: "Message",
  id: string,
  owner?: string | null,
  content: string,
  event?: Event | null,
  eventId?: string | null,
  createdAt: string,
  updatedAt: string,
  original?: S3Object | null,
  thumbnail?: S3Object | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type UpdateRaceEventInput = {
  id: string,
  eventId?: string | null,
  type?: string | null,
  competitor?: string | null,
  lap?: number | null,
  time?: string | null,
  position?: number | null,
  speed?: number | null,
  gear?: number | null,
  longitude?: number | null,
  latitude?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelRaceEventConditionInput = {
  eventId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  competitor?: ModelStringInput | null,
  lap?: ModelIntInput | null,
  time?: ModelStringInput | null,
  position?: ModelIntInput | null,
  speed?: ModelIntInput | null,
  gear?: ModelIntInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRaceEventConditionInput | null > | null,
  or?: Array< ModelRaceEventConditionInput | null > | null,
  not?: ModelRaceEventConditionInput | null,
};

export type RaceEvent = {
  __typename: "RaceEvent",
  id: string,
  event?: Event | null,
  eventId?: string | null,
  type?: string | null,
  competitor?: string | null,
  lap?: number | null,
  time?: string | null,
  position?: number | null,
  speed?: number | null,
  gear?: number | null,
  longitude?: number | null,
  latitude?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type DeleteRaceEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationEventInput = {
  id?: string | null,
  type?: string | null,
  geofenceId?: string | null,
  deviceId?: string | null,
  sampleTime?: string | null,
  longitude?: number | null,
  latitude?: number | null,
  _version?: number | null,
};

export type UpdateMessageInput = {
  id: string,
  owner?: string | null,
  content?: string | null,
  eventId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  original?: S3ObjectInput | null,
  thumbnail?: S3ObjectInput | null,
  _version?: number | null,
};

export type CreateRaceEventInput = {
  id?: string | null,
  eventId?: string | null,
  type?: string | null,
  competitor?: string | null,
  lap?: number | null,
  time?: string | null,
  position?: number | null,
  speed?: number | null,
  gear?: number | null,
  longitude?: number | null,
  latitude?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
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

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  content?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLocationEventFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  geofenceId?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  sampleTime?: ModelStringInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  and?: Array< ModelLocationEventFilterInput | null > | null,
  or?: Array< ModelLocationEventFilterInput | null > | null,
  not?: ModelLocationEventFilterInput | null,
};

export type ModelLocationEventConnection = {
  __typename: "ModelLocationEventConnection",
  items?:  Array<LocationEvent | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRaceEventFilterInput = {
  id?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  competitor?: ModelStringInput | null,
  lap?: ModelIntInput | null,
  time?: ModelStringInput | null,
  position?: ModelIntInput | null,
  speed?: ModelIntInput | null,
  gear?: ModelIntInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRaceEventFilterInput | null > | null,
  or?: Array< ModelRaceEventFilterInput | null > | null,
  not?: ModelRaceEventFilterInput | null,
};

export type ModelRaceEventConnection = {
  __typename: "ModelRaceEventConnection",
  items?:  Array<RaceEvent | null > | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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

export type UpdateLocationEventMutationVariables = {
  input: UpdateLocationEventInput,
  condition?: ModelLocationEventConditionInput | null,
};

export type UpdateLocationEventMutation = {
  updateLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationEventMutationVariables = {
  input: DeleteLocationEventInput,
  condition?: ModelLocationEventConditionInput | null,
};

export type DeleteLocationEventMutation = {
  deleteLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRaceEventMutationVariables = {
  input: UpdateRaceEventInput,
  condition?: ModelRaceEventConditionInput | null,
};

export type UpdateRaceEventMutation = {
  updateRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRaceEventMutationVariables = {
  input: DeleteRaceEventInput,
  condition?: ModelRaceEventConditionInput | null,
};

export type DeleteRaceEventMutation = {
  deleteRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLocationEventMutationVariables = {
  input: CreateLocationEventInput,
  condition?: ModelLocationEventConditionInput | null,
};

export type CreateLocationEventMutation = {
  createLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRaceEventMutationVariables = {
  input: CreateRaceEventInput,
  condition?: ModelRaceEventConditionInput | null,
};

export type CreateRaceEventMutation = {
  createRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      AverageSpeed?:  {
        __typename: "Speed",
        speed?: string | null,
        units?: string | null,
      } | null,
      lap?: string | null,
      rank?: string | null,
      Time?:  {
        __typename: "LapTime",
        time?: string | null,
      } | null,
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
      AverageSpeed?:  {
        __typename: "Speed",
        speed?: string | null,
        units?: string | null,
      } | null,
      lap?: string | null,
      rank?: string | null,
      Time?:  {
        __typename: "LapTime",
        time?: string | null,
      } | null,
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

export type GetStarredEventQueryVariables = {
  id: string,
};

export type GetStarredEventQuery = {
  getStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      owner?: string | null,
      content: string,
      event?:  {
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
      eventId?: string | null,
      createdAt: string,
      updatedAt: string,
      original?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      thumbnail?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      owner?: string | null,
      content: string,
      event?:  {
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
      eventId?: string | null,
      createdAt: string,
      updatedAt: string,
      original?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      thumbnail?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessagesByEventIdQueryVariables = {
  eventId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByEventIdQuery = {
  messagesByEventId?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      owner?: string | null,
      content: string,
      event?:  {
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
      eventId?: string | null,
      createdAt: string,
      updatedAt: string,
      original?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      thumbnail?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationEventQueryVariables = {
  id: string,
};

export type GetLocationEventQuery = {
  getLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationEventsQueryVariables = {
  filter?: ModelLocationEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationEventsQuery = {
  listLocationEvents?:  {
    __typename: "ModelLocationEventConnection",
    items?:  Array< {
      __typename: "LocationEvent",
      id: string,
      type?: string | null,
      geofenceId?: string | null,
      deviceId?: string | null,
      sampleTime?: string | null,
      longitude?: number | null,
      latitude?: number | null,
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

export type SyncLocationEventsQueryVariables = {
  filter?: ModelLocationEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationEventsQuery = {
  syncLocationEvents?:  {
    __typename: "ModelLocationEventConnection",
    items?:  Array< {
      __typename: "LocationEvent",
      id: string,
      type?: string | null,
      geofenceId?: string | null,
      deviceId?: string | null,
      sampleTime?: string | null,
      longitude?: number | null,
      latitude?: number | null,
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

export type GetRaceEventQueryVariables = {
  id: string,
};

export type GetRaceEventQuery = {
  getRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRaceEventsQueryVariables = {
  filter?: ModelRaceEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRaceEventsQuery = {
  listRaceEvents?:  {
    __typename: "ModelRaceEventConnection",
    items?:  Array< {
      __typename: "RaceEvent",
      id: string,
      event?:  {
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
      eventId?: string | null,
      type?: string | null,
      competitor?: string | null,
      lap?: number | null,
      time?: string | null,
      position?: number | null,
      speed?: number | null,
      gear?: number | null,
      longitude?: number | null,
      latitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type RaceEventsByEventIdQueryVariables = {
  eventId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRaceEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RaceEventsByEventIdQuery = {
  raceEventsByEventId?:  {
    __typename: "ModelRaceEventConnection",
    items?:  Array< {
      __typename: "RaceEvent",
      id: string,
      event?:  {
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
      eventId?: string | null,
      type?: string | null,
      competitor?: string | null,
      lap?: number | null,
      time?: string | null,
      position?: number | null,
      speed?: number | null,
      gear?: number | null,
      longitude?: number | null,
      latitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRaceEventsQueryVariables = {
  filter?: ModelRaceEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRaceEventsQuery = {
  syncRaceEvents?:  {
    __typename: "ModelRaceEventConnection",
    items?:  Array< {
      __typename: "RaceEvent",
      id: string,
      event?:  {
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
      eventId?: string | null,
      type?: string | null,
      competitor?: string | null,
      lap?: number | null,
      time?: string | null,
      position?: number | null,
      speed?: number | null,
      gear?: number | null,
      longitude?: number | null,
      latitude?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnMutateMessageSubscriptionVariables = {
  eventId?: string | null,
};

export type OnMutateMessageSubscription = {
  onMutateMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnReceiveRaceEventSubscriptionVariables = {
  eventId?: string | null,
};

export type OnReceiveRaceEventSubscription = {
  onReceiveRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnCreateStarredEventSubscription = {
  onCreateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnUpdateStarredEventSubscription = {
  onUpdateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnDeleteStarredEventSubscription = {
  onDeleteStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    owner?: string | null,
    content: string,
    event?:  {
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
    eventId?: string | null,
    createdAt: string,
    updatedAt: string,
    original?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    thumbnail?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLocationEventSubscription = {
  onCreateLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationEventSubscription = {
  onUpdateLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationEventSubscription = {
  onDeleteLocationEvent?:  {
    __typename: "LocationEvent",
    id: string,
    type?: string | null,
    geofenceId?: string | null,
    deviceId?: string | null,
    sampleTime?: string | null,
    longitude?: number | null,
    latitude?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRaceEventSubscription = {
  onCreateRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRaceEventSubscription = {
  onUpdateRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRaceEventSubscription = {
  onDeleteRaceEvent?:  {
    __typename: "RaceEvent",
    id: string,
    event?:  {
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
    eventId?: string | null,
    type?: string | null,
    competitor?: string | null,
    lap?: number | null,
    time?: string | null,
    position?: number | null,
    speed?: number | null,
    gear?: number | null,
    longitude?: number | null,
    latitude?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

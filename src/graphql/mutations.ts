/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStarredEvent = /* GraphQL */ `
  mutation CreateStarredEvent(
    $input: CreateStarredEventInput!
    $condition: ModelStarredEventConditionInput
  ) {
    createStarredEvent(input: $input, condition: $condition) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateStarredEvent = /* GraphQL */ `
  mutation UpdateStarredEvent(
    $input: UpdateStarredEventInput!
    $condition: ModelStarredEventConditionInput
  ) {
    updateStarredEvent(input: $input, condition: $condition) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteStarredEvent = /* GraphQL */ `
  mutation DeleteStarredEvent(
    $input: DeleteStarredEventInput!
    $condition: ModelStarredEventConditionInput
  ) {
    deleteStarredEvent(input: $input, condition: $condition) {
      id
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      heart
      thumbsup
      happy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      heart
      thumbsup
      happy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      heart
      thumbsup
      happy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createLocationEvent = /* GraphQL */ `
  mutation CreateLocationEvent(
    $input: CreateLocationEventInput!
    $condition: ModelLocationEventConditionInput
  ) {
    createLocationEvent(input: $input, condition: $condition) {
      id
      type
      geofenceId
      deviceId
      sampleTime
      longitude
      latitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateLocationEvent = /* GraphQL */ `
  mutation UpdateLocationEvent(
    $input: UpdateLocationEventInput!
    $condition: ModelLocationEventConditionInput
  ) {
    updateLocationEvent(input: $input, condition: $condition) {
      id
      type
      geofenceId
      deviceId
      sampleTime
      longitude
      latitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocationEvent = /* GraphQL */ `
  mutation DeleteLocationEvent(
    $input: DeleteLocationEventInput!
    $condition: ModelLocationEventConditionInput
  ) {
    deleteLocationEvent(input: $input, condition: $condition) {
      id
      type
      geofenceId
      deviceId
      sampleTime
      longitude
      latitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      owner
      content
      eventId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMutateMessage = /* GraphQL */ `
  subscription OnMutateMessage($eventId: ID) {
    onMutateMessage(eventId: $eventId) {
      id
      owner
      content
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
      eventId
      createdAt
      updatedAt
      original {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onReceiveRaceEvent = /* GraphQL */ `
  subscription OnReceiveRaceEvent($eventId: ID) {
    onReceiveRaceEvent(eventId: $eventId) {
      id
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
      eventId
      type
      competitor
      lap
      time
      position
      speed
      gear
      longitude
      latitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateStarredEvent = /* GraphQL */ `
  subscription OnCreateStarredEvent($owner: String!) {
    onCreateStarredEvent(owner: $owner) {
      id
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStarredEvent = /* GraphQL */ `
  subscription OnUpdateStarredEvent($owner: String!) {
    onUpdateStarredEvent(owner: $owner) {
      id
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStarredEvent = /* GraphQL */ `
  subscription OnDeleteStarredEvent($owner: String!) {
    onDeleteStarredEvent(owner: $owner) {
      id
      owner
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      owner
      content
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
      eventId
      createdAt
      updatedAt
      original {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      owner
      content
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
      eventId
      createdAt
      updatedAt
      original {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      owner
      content
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
      eventId
      createdAt
      updatedAt
      original {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLocationEvent = /* GraphQL */ `
  subscription OnCreateLocationEvent {
    onCreateLocationEvent {
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
export const onUpdateLocationEvent = /* GraphQL */ `
  subscription OnUpdateLocationEvent {
    onUpdateLocationEvent {
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
export const onDeleteLocationEvent = /* GraphQL */ `
  subscription OnDeleteLocationEvent {
    onDeleteLocationEvent {
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
export const onCreateRaceEvent = /* GraphQL */ `
  subscription OnCreateRaceEvent {
    onCreateRaceEvent {
      id
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
      eventId
      type
      competitor
      lap
      time
      position
      speed
      gear
      longitude
      latitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRaceEvent = /* GraphQL */ `
  subscription OnUpdateRaceEvent {
    onUpdateRaceEvent {
      id
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
      eventId
      type
      competitor
      lap
      time
      position
      speed
      gear
      longitude
      latitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRaceEvent = /* GraphQL */ `
  subscription OnDeleteRaceEvent {
    onDeleteRaceEvent {
      id
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
      eventId
      type
      competitor
      lap
      time
      position
      speed
      gear
      longitude
      latitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

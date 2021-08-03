/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMutateMessage = /* GraphQL */ `
  subscription OnMutateMessage($eventId: ID) {
    onMutateMessage(eventId: $eventId) {
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
export const onCreateStarredEvent = /* GraphQL */ `
  subscription OnCreateStarredEvent($owner: String) {
    onCreateStarredEvent(owner: $owner) {
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
export const onUpdateStarredEvent = /* GraphQL */ `
  subscription OnUpdateStarredEvent($owner: String) {
    onUpdateStarredEvent(owner: $owner) {
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
export const onDeleteStarredEvent = /* GraphQL */ `
  subscription OnDeleteStarredEvent($owner: String) {
    onDeleteStarredEvent(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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

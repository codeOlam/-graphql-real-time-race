/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRaces = /* GraphQL */ `
  query GetRaces {
    getRaces {
      PK
      SK
      raceName
      round
      season
      date
      time
      url
      Circuit
    }
  }
`;
export const getResults = /* GraphQL */ `
  query GetResults($driverId: String!) {
    getResults(driverId: $driverId) {
      Constructor {
        constructorId
        name
        nationality
        url
      }
      Driver {
        code
        dateOfBirth
        driverId
        familyName
        givenName
        nationality
        permanentNumber
        url
      }
      FastestLap {
        AverageSpeed {
          speed
          units
        }
        lap
        rank
        Time {
          time
        }
      }
      driverId
      grid
      laps
      number
      PK
      points
      position
      positionText
      round
      SK
      status
    }
  }
`;
export const getResults2 = /* GraphQL */ `
  query GetResults2($driverId: String!) {
    getResults2(driverId: $driverId) {
      Constructor {
        constructorId
        name
        nationality
        url
      }
      Driver {
        code
        dateOfBirth
        driverId
        familyName
        givenName
        nationality
        permanentNumber
        url
      }
      FastestLap {
        AverageSpeed {
          speed
          units
        }
        lap
        rank
        Time {
          time
        }
      }
      driverId
      grid
      laps
      number
      PK
      points
      position
      positionText
      round
      SK
      status
    }
  }
`;
export const syncStarredEvents = /* GraphQL */ `
  query SyncStarredEvents(
    $filter: ModelStarredEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStarredEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStarredEvent = /* GraphQL */ `
  query GetStarredEvent($id: ID!) {
    getStarredEvent(id: $id) {
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
export const listStarredEvents = /* GraphQL */ `
  query ListStarredEvents(
    $filter: ModelStarredEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarredEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const messagesByEventId = /* GraphQL */ `
  query MessagesByEventId(
    $eventId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByEventId(
      eventId: $eventId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLocationEvent = /* GraphQL */ `
  query GetLocationEvent($id: ID!) {
    getLocationEvent(id: $id) {
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
export const listLocationEvents = /* GraphQL */ `
  query ListLocationEvents(
    $filter: ModelLocationEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocationEvents = /* GraphQL */ `
  query SyncLocationEvents(
    $filter: ModelLocationEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocationEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRaceEvent = /* GraphQL */ `
  query GetRaceEvent($id: ID!) {
    getRaceEvent(id: $id) {
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
export const listRaceEvents = /* GraphQL */ `
  query ListRaceEvents(
    $filter: ModelRaceEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaceEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const raceEventsByEventId = /* GraphQL */ `
  query RaceEventsByEventId(
    $eventId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaceEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    raceEventsByEventId(
      eventId: $eventId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRaceEvents = /* GraphQL */ `
  query SyncRaceEvents(
    $filter: ModelRaceEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRaceEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

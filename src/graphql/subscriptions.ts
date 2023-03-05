/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDog = /* GraphQL */ `
  subscription OnCreateDog($filter: ModelSubscriptionDogFilterInput) {
    onCreateDog(filter: $filter) {
      id
      name
      notes
      events {
        items {
          id
          type
          dogId
          createdAt
          updatedAt
        }
        nextToken
      }
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDog = /* GraphQL */ `
  subscription OnUpdateDog($filter: ModelSubscriptionDogFilterInput) {
    onUpdateDog(filter: $filter) {
      id
      name
      notes
      events {
        items {
          id
          type
          dogId
          createdAt
          updatedAt
        }
        nextToken
      }
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDog = /* GraphQL */ `
  subscription OnDeleteDog($filter: ModelSubscriptionDogFilterInput) {
    onDeleteDog(filter: $filter) {
      id
      name
      notes
      events {
        items {
          id
          type
          dogId
          createdAt
          updatedAt
        }
        nextToken
      }
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      type
      dog {
        id
        name
        notes
        events {
          nextToken
        }
        family {
          id
          ownerId
          createdAt
          updatedAt
        }
        familyId
        createdAt
        updatedAt
      }
      dogId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      type
      dog {
        id
        name
        notes
        events {
          nextToken
        }
        family {
          id
          ownerId
          createdAt
          updatedAt
        }
        familyId
        createdAt
        updatedAt
      }
      dogId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      type
      dog {
        id
        name
        notes
        events {
          nextToken
        }
        family {
          id
          ownerId
          createdAt
          updatedAt
        }
        familyId
        createdAt
        updatedAt
      }
      dogId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onCreateFamily(filter: $filter) {
      id
      ownerId
      dogs {
        items {
          id
          name
          notes
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          cognitoId
          name
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onUpdateFamily(filter: $filter) {
      id
      ownerId
      dogs {
        items {
          id
          name
          notes
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          cognitoId
          name
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onDeleteFamily(filter: $filter) {
      id
      ownerId
      dogs {
        items {
          id
          name
          notes
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          cognitoId
          name
          familyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      cognitoId
      name
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      cognitoId
      name
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      cognitoId
      name
      family {
        id
        ownerId
        dogs {
          nextToken
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      familyId
      createdAt
      updatedAt
    }
  }
`;

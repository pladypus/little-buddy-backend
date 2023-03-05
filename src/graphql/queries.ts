/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
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
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        dog {
          id
          name
          notes
          familyId
          createdAt
          updatedAt
        }
        dogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
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
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        name
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
      nextToken
    }
  }
`;
export const dogsByFamilyId = /* GraphQL */ `
  query DogsByFamilyId(
    $familyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dogsByFamilyId(
      familyId: $familyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const eventsByDogId = /* GraphQL */ `
  query EventsByDogId(
    $dogId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByDogId(
      dogId: $dogId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        dog {
          id
          name
          notes
          familyId
          createdAt
          updatedAt
        }
        dogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByFamilyId = /* GraphQL */ `
  query UsersByFamilyId(
    $familyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByFamilyId(
      familyId: $familyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        name
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
      nextToken
    }
  }
`;

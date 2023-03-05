/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDog = /* GraphQL */ `
  mutation CreateDog(
    $input: CreateDogInput!
    $condition: ModelDogConditionInput
  ) {
    createDog(input: $input, condition: $condition) {
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
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
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
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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

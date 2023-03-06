import { gql } from "graphql-request";
import { client } from "~/setupTests";

export async function createDogMT(familyId: string) {
  const CREATE_DOG = gql`
  mutation {
    createDog(input: { name: "Pie", familyId: "${familyId}"  }) {
      id
      family {
        ownerId
      }
    }
  }
`;

  return await client.rawRequest(CREATE_DOG);
}

export async function createEventMT(dogId: string) {
  const CREATE_EVENT = gql`
  mutation {
    createEvent(input: { type: pee, dogId: "${dogId}" }) {
      id
      dog {
        name
      }
    }
  }
`;

  return await client.rawRequest(CREATE_EVENT);
}

export async function createFamilyMT() {
  const CREATE_FAMILY = gql`
    mutation {
      createFamily(input: { ownerId: "APPLE_USER" }) {
        id
      }
    }
  `;

  return await client.rawRequest(CREATE_FAMILY);
}

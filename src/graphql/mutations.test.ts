import { gql } from "graphql-request";
import { client } from "~/setupTests";

describe("Dog Mutations", () => {
  test("should create a new dog", async () => {
    const CREATE_DOG = gql`
      mutation {
        createDog(input: { name: "Apple", events: "Bathroom" }) {
          id
        }
      }
    `;

    const res = await client.rawRequest(CREATE_DOG);

    expect(res.status).toEqual(200);
    expect(res.data).toMatchObject({
      createDog: {
        id: expect.any(String),
      },
    });
  });

  // test("should update a dog", async () => {
  //   const GET_DOGS = gql`
  //     query ListDogs {
  //       listDogs {
  //         apple
  //       }
  //     }
  //   `;

  //   const res = await client.rawRequest(GET_DOGS);

  //   expect(res.status).toEqual(200);
  //   expect(res.data).toEqual({
  //     listDogs: {
  //       apple: [],
  //     },
  //   });
  // });

  // test("should delete a dog", async () => {
  //   const GET_DOGS = gql`
  //     query ListDogs {
  //       listDogs {
  //         apple
  //       }
  //     }
  //   `;

  //   const res = await client.rawRequest(GET_DOGS);

  //   expect(res.status).toEqual(200);
  //   expect(res.data).toEqual({
  //     listDogs: {
  //       apple: [],
  //     },
  //   });
  // });
});

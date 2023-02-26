import { gql } from "graphql-request";
import { client } from "~/setupTests";

describe("Dog Queries", () => {
  // test("should return a single dog", async () => {
  //   const GET_DOG = gql`
  //     query singleDog {
  //       getDog {
  //         content
  //       }
  //     }
  //   `;
  //   const res = await client.rawRequest(GET_DOG);
  //   expect(res.status).toEqual(200);
  //   expect(res.data).toEqual({
  //     listPosts: {
  //       apple: [],
  //     },
  //   });
  // });

  test("should return a list of dogs", async () => {
    // todo: should be handled outside of actual test
    const CREATE_DOG = gql`
      mutation {
        createDog(input: { name: "Apple", events: "Bathroom" }) {
          id
        }
      }
    `;

    await client.rawRequest(CREATE_DOG);

    const GET_DOGS = gql`
      query {
        listDogs {
          items {
            id
            name
          }
        }
      }
    `;
    const res = await client.rawRequest(GET_DOGS);
    expect(res.status).toEqual(200);
    expect(res.data).toMatchObject({
      listDogs: {
        items: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
          }),
        ]),
      },
    });
  });
});

import { createDogMT, createFamilyMT } from "../helpers";

describe("Dog Mutations", () => {
  test("should create a new dog", async () => {
    const familyRes = await createFamilyMT();

    const res = await createDogMT(familyRes.data.createFamily.id);

    expect(res.status).toEqual(200);
    expect(res.data).toMatchObject({
      createDog: {
        id: expect.any(String),
        family: {
          ownerId: expect.any(String),
        },
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

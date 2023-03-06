import { createDogMT, createEventMT, createFamilyMT } from "../helpers";

describe("Event Mutations", () => {
  test("should create a new event", async () => {
    const familyRes = await createFamilyMT();

    const dogRes = await createDogMT(familyRes.data.createFamily.id);

    const res = await createEventMT(dogRes.data.createDog.id);

    expect(res.status).toEqual(200);
    expect(res.data).toMatchObject({
      createEvent: {
        id: expect.any(String),
        dog: {
          name: expect.any(String),
        },
      },
    });
  });
});

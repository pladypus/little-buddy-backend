import { createFamilyMT } from "../helpers";

describe("Family Mutations", () => {
  test("should create a new family", async () => {
    const res = await createFamilyMT();

    expect(res.status).toEqual(200);
    expect(res.data).toMatchObject({
      createFamily: {
        id: expect.any(String),
      },
    });
  });
});

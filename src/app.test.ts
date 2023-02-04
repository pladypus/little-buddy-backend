import app from "@src/app";
import request from "supertest";

describe("App", () => {
  test("accpets request at set endpoint", async () => {
    const res = await request(app).get("/graphql").send({
      query: "{user{name}}",
    });

    expect(res.status).toEqual(200);
  });
});

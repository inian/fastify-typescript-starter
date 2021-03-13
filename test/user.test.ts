"use strict";
import app from "../src/app";

describe("testing user endpoint", () => {
  test("testing GET user", async () => {
    const userId = "7078bc23-9dd6-460d-8b93-082254fee63a";
    const response = await app().inject({
      method: "GET",
      url: `/user/${userId}`,
      headers: {
        authorization: "Bearer xxx",
      },
    });
    expect(response.statusCode).toBe(200);
    const responseJSON = JSON.parse(response.body);
    expect(responseJSON).toMatchObject({
      id: userId,
      firstName: "John",
      lastName: "Doe",
    });
  });
});

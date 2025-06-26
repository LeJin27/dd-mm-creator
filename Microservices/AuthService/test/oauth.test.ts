import dotenv from "dotenv";
dotenv.config();

import { test, beforeAll, afterAll, beforeEach, expect, vi } from "vitest";
import supertest from "supertest";
import * as http from "http";
import app from "../src/app";
import * as db from "./db";

let server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>;

beforeAll(async () => {
  server = http.createServer(app);
  server.listen();
  return db.reset();
});

afterAll(() => {
  db.shutdown();
  server.close();
});
beforeEach(async () => {
  await db.reset();
});

const validCredentials = {
  token: 'mocked-token'
};
vi.mock("google-auth-library", () => {
  return {
    OAuth2Client: vi.fn().mockImplementation(() => ({
      verifyIdToken: vi.fn().mockResolvedValue({
        getPayload: () => ({
          email: "molly@books.com",
          name: "Molly Member",
          sub: "unique-google-id",
        }),
      }),
    })),
  };
});


test("Serves API Docs", async () => {
  await supertest(server)
    .get("/api/v0/docs/")
    .expect(200)
    .expect("Content-Type", /text\/html/);
});

test("200 Logged in: User can login with valid credentials", async () => {
  const res = await supertest(server)
    .post("/api/v0/auth/google-login/")
    .send(validCredentials)
  console.log(res.body)

  expect(res.body).toHaveProperty("email", "molly@books.com");

});

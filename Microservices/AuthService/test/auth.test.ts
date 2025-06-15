
import dotenv from 'dotenv'
dotenv.config()

import { test, beforeAll, afterAll, beforeEach, expect, vi } from 'vitest'
import supertest from 'supertest'
import * as http from 'http'
import app from '../src/app'
import * as db from './db'


let server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>

beforeAll(async () => {
  server = http.createServer(app)
  server.listen()
  return db.reset()
})

afterAll(() => {
    db.shutdown()
  server.close()
})
beforeEach(async () => {
  await db.reset();
})

const cat = {
  email: "molly@books.com",
  password: "mollymember",
}

test('Serves API Docs', async () => {
  await supertest(server)
    .get('/api/v0/docs/')
    .expect(200)
    .expect('Content-Type', /text\/html/);
});

test('200 Logged in: User can login with valid credentials', async () => {
  const res = await supertest(server)
    .post('/api/v0/auth/login/')
    .send(cat)
    .expect(200)

  expect(res.body).toHaveProperty('name', 'Molly Member');
});

test('401 Unauthorized: User has no token provided', async () => {
  await supertest(server)
    .get('/api/v0/auth/userInfo')
    .expect(401)

});
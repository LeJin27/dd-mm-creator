import { test, beforeAll, afterAll, beforeEach, expect, vi } from 'vitest'
import supertest from 'supertest'
import * as http from 'http'
import app from '../src/app'


let server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>

beforeAll(async () => {
  server = http.createServer(app)
  server.listen()
})

afterAll(() => {
  server.close()
})

const cat = {
  email: "cat@books.com",
  password: "cat",
}

test('Serves API Docs', async () => {
  await supertest(server)
    .get('/api/v0/docs/')
    .expect(200)
    .expect('Content-Type', /text\/html/);
});

test('User can login with valid credentials', async () => {
  const res = await supertest(server)
    .post('/api/v0/auth/login/')
    .send(cat)
    .expect(200)

  expect(res.body).toHaveProperty('name', 'cat');
});
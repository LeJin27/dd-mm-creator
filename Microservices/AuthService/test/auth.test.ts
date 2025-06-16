
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

const validCredentials = {
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
    .send(validCredentials)
    .expect(200)

  expect(res.body).toHaveProperty('name', 'Molly Member');
  console.log(res.body)
});

test('401 Unauthorized: No Token', async () => {
  const res = await supertest(server)
    .get('/api/v0/auth/userInfo')
    .expect(401)
  const resText = JSON.parse(res.text);
  expect(resText.message).toEqual('Unauthorized: No Token')

});

export const badJWT = "7m#pK9@L!2xQ$5vR%8sT^1wU&3yV*6zW(4aX)9bY_0cZ+dA=eB-fC/gD|hEiF]jG[kH{lI}mJ~nK`oL'pM,qN.rO/sP0tQ1uR2vS3wT4xU5yV6zW7aX8bY9cZ0dA1eB2fC3gD4hE5iF6jG7kH8lI9mJ0nK1oL2pM3qN4rO5sP6tQ7uR8vS9wT"
test('401 Unauthorized: jwt malformed', async () => {
  const res = await supertest(server)
    .get('/api/v0/auth/userInfo')
    .set('Authorization', 'Bearer ' + badJWT)
    .expect(401)
  const resText = JSON.parse(res.text);
  expect(resText.message.message).toEqual('jwt malformed')

});

test('200 Authorized: User can login and retrieve their info', async () => {
  let accessToken;
  await supertest(server)
    .post('/api/v0/auth/login')
    .send(validCredentials)
    .then((res) => {
      accessToken = res.body.accessToken
  })

  console.log(accessToken)

  await supertest(server)
    .get('/api/v0/auth/userInfo')
    .set('Authorization', 'Bearer ' + accessToken)
    .expect(200)
  

});
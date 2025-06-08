import { test, beforeAll, afterAll, beforeEach, expect, vi } from 'vitest'
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
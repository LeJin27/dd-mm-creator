import { email, midt, UUID } from "../types"

export interface Credentials {
  email: email,
  password: string
}

export interface Authenticated {
  name: string,
  email?: string,
  accessToken: midt
}

export interface User {
  name: string,
  email?: string,
  id: UUID
}
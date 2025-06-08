import { email, midt } from "../types"

export interface Credentials {
  email: email,
  password: string
}

export interface Authenticated {
  name: string,
  email?: string,
  accessToken: midt
}
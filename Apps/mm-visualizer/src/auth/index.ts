export interface Credentials {
  email: string,
  password: string
}


export interface Authenticated {
  name: string,
  email: string
  accessToken: string
}


export interface User {
  name: string
  email: string
}

export interface NewUserCredentials {
  name: string
  email: string
  password: string
}
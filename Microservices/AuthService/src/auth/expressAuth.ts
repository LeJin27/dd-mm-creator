//import { Request } from "express"
import { SessionUser } from '../types'

export function expressAuthentication(
  //request: Request,
  //scopes?: string[]
): Promise<SessionUser> {
  return Promise.resolve({ id: "test", roles: "admin" });
}
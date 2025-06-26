/**
 * @pattern ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
 */
export type UUID = string; 

export interface SessionUser {
  id: string,
  roles?: string
}

/** 
 * @minLength 180
 * @maxLength 240
 * @pattern ^[A-Za-z0-9_-]{2,}(?:\.[A-Za-z0-9_-]{2,}){2}$
 */
export type midt = string;


/**
 * Email pattern (simplified RFC 5322)
 * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
 */
export type email = string;

declare global {
  namespace Express {
    export interface Request {
      user?: SessionUser
    }
  }
}
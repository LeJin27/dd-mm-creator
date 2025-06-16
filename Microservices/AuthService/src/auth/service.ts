import { Authenticated, Credentials, User } from ".";
import { pool } from "../db";
import { midt, SessionUser, UUID } from "../types";
import * as jwt from "jsonwebtoken";
import { selectByCredentials, selectUserById, selectUserInfoById } from "./queries";

const envSecret = process.env.MASTER_SECRET;
if (!envSecret) {
  throw new Error("JWT_SECRET is not set");
}
const JWT_SECRET = envSecret;

const JWT_OPTIONS: jwt.SignOptions = {
  expiresIn: "30m",
  algorithm: "HS256",
};
export function generateToken(userId: UUID, text = ""): midt {
  return jwt.sign({ id: userId }, JWT_SECRET + text, JWT_OPTIONS);
}

export class AuthService {
  public async check(token: string, scopes?: string[]): Promise<SessionUser> {
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
      const decodedTokenId = decodedToken.id;

      const query = {
        text: selectUserById,
        values: [decodedTokenId],
      };
      const { rows } = await pool.query(query);
      if (rows.length === 1) {
        const decodedUser = { id: rows[0].id, roles: rows[0].roles };
        if (scopes) {
          for (const scope of scopes) {
            if (!decodedUser.roles || !decodedUser.roles.includes(scope)) {
              throw {
                status: 401,
                message: "Unauthorized: Missing required role",
              };
            }
          }
        }
        return decodedUser;
      } else {
        throw { status: 401, message: "Unauthorized: Nonexistant user" };
      }
    } catch (error) {
      throw { status: 401, message: error };
    }
  }

  public async login(
    credentials: Credentials
  ): Promise<Authenticated | undefined> {
    const query = {
      text: selectByCredentials,
      values: [credentials.email, credentials.password],
    };

    try {
      const { rows } = await pool.query(query);
      if (rows.length === 1) {
        const user = rows[0];
        const accessToken = generateToken(user.id);
        return { name: user.name, accessToken: accessToken, email: user.email };
      } else {
        return undefined;
      }
    } catch  {
      return undefined
    }
  }

  public async getUserInfo(userId: UUID): Promise<User | undefined> {
    const query = {
      text: selectUserInfoById,
      values: [userId],
    };
    try {
      const { rows } = await pool.query(query);
      if (rows.length === 1) {
        const user = rows[0];
        return { name: user.name, email: user.email };
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return undefined
    }
  }
}

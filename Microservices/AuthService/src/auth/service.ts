import { Authenticated, Credentials } from '.';
import { midt, UUID} from '../types'
import * as jwt from "jsonwebtoken"


const JWT_SECRET = process.env.MASTER_SECRET
const JWT_OPTIONS: jwt.SignOptions = {
  expiresIn: "30m",
  algorithm: "HS256"
};
export function generateToken(userId: UUID, text = ''): midt {
  return jwt.sign({ id: userId }, JWT_SECRET + text, JWT_OPTIONS);
}


export class AuthService {

  public async login(credentials: Credentials): Promise<Authenticated | undefined> {
    console.log(credentials)
    return { name: "test", email: "cat@books.com", accessToken: generateToken("uuid") };
  }

}

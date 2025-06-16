import {
  Body,
  Controller,
  Post,
  Security,
  Response,
  Route,
  Get,
  Request,
} from 'tsoa'
import { Authenticated, Credentials, User } from '.'
import { AuthService } from './service'
import { SessionUser } from '../types';


@Route('auth')
export class AuthController extends Controller {

  @Post('login')
  @Response('401', 'Unauthorised')
  public async login(
    @Body() credentials: Credentials,
  ): Promise<Authenticated | undefined> {
    try {
      const authenticatedUser = await new AuthService().login(credentials);
      if (!authenticatedUser) {
        this.setStatus(401);
        return;
      }
      return authenticatedUser;
    } catch (error) {
      console.log(process.env.MASTER_SECRET);
      console.log(process.env.POSTGRES_PASSWORD);
      console.error('Error during authcontroller:', error);
      this.setStatus(500);
      return;
    }
  }
  @Get('userInfo')
  @Security("jwt")
  @Response('401', 'Unauthorised')
  public async getUserInfo(
    @Request() request: Express.Request,
  ): Promise<User | undefined> {
    const requestor = request.user as SessionUser;
    const requestorId = requestor.id;
    try {
      const userInfo = await new AuthService().getUserInfo(requestorId)
      return userInfo
    } catch {
      return undefined;
    }
  }



}

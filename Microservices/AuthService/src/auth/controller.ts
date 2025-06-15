import {
  Body,
  Controller,
  Post,
  Security,
  Response,
  Route,
  Get,
} from 'tsoa'
import { Authenticated, Credentials, User } from '.'
import { AuthService } from './service'


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
  ): Promise<User | undefined> {
    try {
      return undefined

    } catch {
      return undefined;
    }
  }



}

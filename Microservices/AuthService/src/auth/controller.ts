import {
  Body,
  Controller,
  Post,
  Response,
  Route,
} from 'tsoa'
import { Authenticated, Credentials } from '.'
import { AuthService } from './service'


@Route('auth')
export class AuthController extends Controller {

  @Post('login')
  @Response('401', 'Unauthorised')
  public async login(
    @Body() credentials: Credentials,
  ): Promise<Authenticated | undefined> {
    const authenticatedUser = await new AuthService().login(credentials);
    if (!authenticatedUser) {
      this.setStatus(401);
      return;

    }
    return authenticatedUser;
  }




}

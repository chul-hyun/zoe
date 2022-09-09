import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async token(@Body('accessToken') accessToken: string): Promise<any> {
    console.log('request.query.accessToken', accessToken);

    return this.authService.getToken(accessToken);
  }

  @Post('join')
  async join(
    @Body('accessToken') accessToken: string,
    @Body('nickname') nickname: string,
  ): Promise<any> {
    console.log('request.query.accessToken', accessToken);
    console.log('request.query.nickname', nickname);

    return this.authService.join(accessToken, nickname);
  }
}

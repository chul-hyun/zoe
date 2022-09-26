import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Profile } from 'passport';
import { Request, Response } from 'express';

import { AuthService } from '../../service/auth/auth.service';
import { KakaoAuthGuard } from '../../service/auth/kakao.strategy';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('oauth')
  @UseGuards(KakaoAuthGuard)
  async oAuth(@Req() req: Request) {}

  @Get('oauth/callback') // AUTH_KAKAO_CALLBACK_URL
  @UseGuards(KakaoAuthGuard)
  async oAuthCallback(@Req() req: Request, @Res() res: Response) {
    const profile: Profile | undefined = req.user as Profile | undefined;
    const redirectUrl = await this.authService.sign(profile);

    res.redirect(redirectUrl);
  }
}

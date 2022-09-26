import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '../../service/auth/jwt.strategy';
import { AccessTokenData } from '../../service/auth/AccessTokenData.interface';
import { UsersService } from '../../service/users/users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request) {
    const accessTokenData = req.user as AccessTokenData;
    const user = this.usersService.getUser(Number(accessTokenData.userId));

    return user;
  }
}

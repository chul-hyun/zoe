import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Profile } from 'passport';

import { JwtService } from '@nestjs/jwt';

import { AuthDbService } from '../../db/auth/auth-db.service';
import { AuthConfService } from '../conf/auth/auth.conf.service';
import { UsersDbService } from '../../db/users/users-db.service';
import { AccessTokenData } from './AccessTokenData.interface';

@Injectable()
export class AuthService {
  constructor(
    private authDb: AuthDbService,
    private usersDb: UsersDbService,
    private jwt: JwtService,
    private authConf: AuthConfService,
  ) {}

  async sign(profile?: Profile) {
    const accessToken = await this.getAccessToken(profile);
    const redirectUrl = `${this.authConf.SUCCESS_REDIRECT_URL}?accessToken=${accessToken}`;
    // TODO Failed redirect url
    return redirectUrl;
  }

  private async getAccessToken(profile?: Profile) {
    if (!profile || !profile.provider || !profile.id) throw new UnauthorizedException();

    const user = await this.getUser(profile);
    const data: AccessTokenData = { userId: `${user.id}`, nickname: user.nickname };

    return this.jwt.sign({ data });
  }

  private async getUser(profile: Profile) {
    const auth = await this.authDb.getAuth(profile.provider, `${profile.id}`);
    if (!auth) throw new UnauthorizedException();

    const user = await this.usersDb.getUser(auth.userId);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}

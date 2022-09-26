import { Strategy } from 'passport-kakao';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Profile } from 'passport';

import { AuthConfService } from '../conf/auth/auth.conf.service';
import { AuthDbService } from '../../db/auth/auth-db.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private authConf: AuthConfService, private authDbService: AuthDbService) {
    super({
      clientID: authConf.KAKAO_CLIENT_ID, // eslint-disable-line @typescript-eslint/naming-convention
      clientSecret: authConf.KAKAO_CLIENT_SECRET,
      callbackURL: authConf.KAKAO_CALLBACK_URL, // eslint-disable-line @typescript-eslint/naming-convention
    });
  }

  async validate(accessToken: string, refreshToken: string, profile?: Profile) {
    if (!profile || !profile.provider || !profile.id) {
      throw new UnauthorizedException();
    }

    return profile;
  }
}

@Injectable()
export class KakaoAuthGuard extends AuthGuard('kakao') {}

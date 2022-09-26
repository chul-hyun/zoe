import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { AuthConfService } from '../conf/auth/auth.conf.service';
import { AccessTokenData } from './AccessTokenData.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authConf: AuthConfService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConf.JWT_SECRET,
    });
  }

  async validate(payload: { data: AccessTokenData }) {
    return payload.data;
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

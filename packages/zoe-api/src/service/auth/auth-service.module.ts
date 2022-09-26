import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtModule } from '@nestjs/jwt';

import { KakaoStrategy } from './kakao.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthDbModule } from '../../db/auth/auth-db.module';
import { AuthConfModule } from '../conf/auth/auth.conf.module';
import { AuthConfService } from '../conf/auth/auth.conf.service';
import { UsersDbModule } from '../../db/users/users-db.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [AuthConfModule],
      useFactory: (authConf: AuthConfService) => ({
        secret: authConf.JWT_SECRET,
        signOptions: { expiresIn: authConf.JWT_EXPIRES_IN },
      }),
      inject: [AuthConfService],
    }),
    AuthConfModule,
    AuthDbModule,
    UsersDbModule,
  ],
  providers: [AuthService, JwtStrategy, KakaoStrategy],
  exports: [AuthService],
})
export class AuthServiceModule {}

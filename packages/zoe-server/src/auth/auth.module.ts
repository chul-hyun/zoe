import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { KakaoModule } from '../kakao/kakao.module';

@Module({
  imports: [UserModule, KakaoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthConfService, confFactory, validate } from './auth.conf.service';
import { envFilePath } from '../common';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      load: [confFactory],
      validate,
      expandVariables: true,
    }),
  ],
  providers: [ConfigService, AuthConfService],
  exports: [AuthConfService],
})
export class AuthConfModule {}

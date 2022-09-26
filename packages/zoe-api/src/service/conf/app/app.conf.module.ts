import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfService, confFactory, validate } from './app.conf.service';
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
  providers: [ConfigService, AppConfService],
  exports: [AppConfService],
})
export class AppConfModule {}

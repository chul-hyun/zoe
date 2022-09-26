import { Module } from '@nestjs/common';

import { AppRouteModule } from './route/app.route.module';
import { AppConfModule } from './service/conf/app/app.conf.module';

@Module({
  imports: [
    AppRouteModule,
    AppConfModule, // This line needed to use AppConfModule from main.ts
  ],
})
export class AppModule {}

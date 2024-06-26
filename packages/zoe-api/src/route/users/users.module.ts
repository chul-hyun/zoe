import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersServiceModule } from '../../service/users/users-service.module';

@Module({
  imports: [UsersServiceModule],
  controllers: [UsersController],
})
export class UsersModule {}

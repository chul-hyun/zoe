import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDbModule } from '../../db/users/users-db.module';

@Module({
  imports: [UsersDbModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersServiceModule {}

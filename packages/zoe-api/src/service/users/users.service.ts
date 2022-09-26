import { Injectable } from '@nestjs/common';

import { UsersDbService } from '../../db/users/users-db.service';

@Injectable()
export class UsersService {
  constructor(private usersDbService: UsersDbService) {}

  async getUser(userId: number) {
    return this.usersDbService.getUser(userId);
  }
}

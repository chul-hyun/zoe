import { Injectable } from '@nestjs/common';

import { userStore } from '../local.store';

@Injectable()
export class UsersDbService {
  async getUser(userId: number) {
    return userStore.find(userId);
  }
}

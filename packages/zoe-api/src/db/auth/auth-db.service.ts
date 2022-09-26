import { Injectable } from '@nestjs/common';

import { authStore } from '../local.store';

@Injectable()
export class AuthDbService {
  async getAuth(provider: string, providerUserId: string) {
    return authStore.find(provider, providerUserId);
  }
}

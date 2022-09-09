import { Injectable } from '@nestjs/common';
import axiosBase, { AxiosResponse } from 'axios';

import { UserService } from '../user/user.service';
import { KakaoService } from '../kakao/kakao.service';

const kakaoAxios = axiosBase.create({
  baseURL: 'https://kapi.kakao.com', // eslint-disable-line @typescript-eslint/naming-convention
  timeout: 1000, // eslint-disable-line @typescript-eslint/no-magic-numbers
});

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private kakaoService: KakaoService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getToken(accessToken: string) {
    const kakaoId = await this.kakaoService.getId(accessToken);
    const user = await this.userService.getUser(kakaoId);

    console.log('user', user);

    return user;
  }

  async join(accessToken: string, nickname: string) {
    const kakaoId = await this.kakaoService.getId(accessToken);

    await this.userService.addUser({ kakaoId, nickname });
    const user = await this.userService.getUser(kakaoId);

    console.log('user', user);

    return user;
  }
}

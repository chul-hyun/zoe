import { Injectable } from '@nestjs/common';
import axiosBase, { AxiosResponse } from 'axios';

const kakaoAxios = axiosBase.create({
  baseURL: 'https://kapi.kakao.com', // eslint-disable-line @typescript-eslint/naming-convention
  timeout: 1000, // eslint-disable-line @typescript-eslint/no-magic-numbers
});

@Injectable()
export class KakaoService {
  async getId(accessToken: string) {
    /* eslint-disable @typescript-eslint/naming-convention */
    const res: AxiosResponse<KakaoUserResponse> = await kakaoAxios({
      method: 'get',
      url: '/v2/user/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    /* eslint-enable */

    return res.data.id;
  }
}

interface KakaoUserResponse {
  id: string;
  connected_at: string; // eslint-disable-line @typescript-eslint/naming-convention
}

import { Module } from '@nestjs/common';

import { KakaoService } from './kakao.service';

@Module({
  imports: [],
  providers: [KakaoService],
  exports: [KakaoService],
})
export class KakaoModule {}

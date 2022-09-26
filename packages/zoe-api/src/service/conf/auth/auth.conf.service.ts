// eslint-disable-next-line max-classes-per-file
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IsOptional, IsString } from 'class-validator';

import { createValidate, registerAsWithKeys } from '../common';

const TOKEN = 'AUTH';
const KEYS = [
  'SUCCESS_REDIRECT_URL',
  'FAILURE_REDIRECT_URL',
  'JWT_SECRET',
  'JWT_EXPIRES_IN',
  'KAKAO_CLIENT_ID',
  'KAKAO_CLIENT_SECRET',
  'KAKAO_CALLBACK_URL',
  // Add more properties here
] as const;

class Conf {
  @IsString()
  SUCCESS_REDIRECT_URL!: string;

  @IsString()
  FAILURE_REDIRECT_URL!: string;

  @IsString()
  JWT_SECRET!: string;

  @IsString()
  JWT_EXPIRES_IN!: string;

  @IsString()
  KAKAO_CLIENT_ID!: string;

  @IsOptional()
  @IsString()
  KAKAO_CLIENT_SECRET?: string;

  @IsString()
  KAKAO_CALLBACK_URL!: string;
  // Add more properties here
}

@Injectable()
export class AuthConfService implements Conf {
  constructor(private config: ConfigService) {}

  get SUCCESS_REDIRECT_URL() {
    return this.config.get(`${TOKEN}.SUCCESS_REDIRECT_URL`) as Conf['SUCCESS_REDIRECT_URL'];
  }
  get FAILURE_REDIRECT_URL() {
    return this.config.get(`${TOKEN}.FAILURE_REDIRECT_URL`) as Conf['FAILURE_REDIRECT_URL'];
  }
  get JWT_SECRET() {
    return this.config.get(`${TOKEN}.JWT_SECRET`) as Conf['JWT_SECRET'];
  }
  get JWT_EXPIRES_IN() {
    return this.config.get(`${TOKEN}.JWT_EXPIRES_IN`) as Conf['JWT_EXPIRES_IN'];
  }
  get KAKAO_CLIENT_ID() {
    return this.config.get(`${TOKEN}.KAKAO_CLIENT_ID`) as Conf['KAKAO_CLIENT_ID'];
  }
  get KAKAO_CLIENT_SECRET() {
    return this.config.get(`${TOKEN}.KAKAO_CLIENT_SECRET`) as Conf['KAKAO_CLIENT_SECRET'];
  }
  get KAKAO_CALLBACK_URL() {
    return this.config.get(`${TOKEN}.KAKAO_CALLBACK_URL`) as Conf['KAKAO_CALLBACK_URL'];
  }
  // Add more properties here
}

export const confFactory = registerAsWithKeys(TOKEN, KEYS);
export const validate = createValidate(Conf, TOKEN, KEYS);

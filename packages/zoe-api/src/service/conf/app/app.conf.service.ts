// eslint-disable-next-line max-classes-per-file
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsIn, IsNumber, IsString } from 'class-validator';
import { ValuesType } from 'utility-types';

import { createValidate, registerAsWithKeys } from '../common';

const TOKEN = 'APP';
const KEYS = [
  'ENV',
  'URL',
  'PORT',
  // Add more properties here
] as const;

const env = ['development', 'production'] as const;
class Conf {
  @IsIn(env)
  ENV!: ValuesType<typeof env>;

  @IsString()
  URL!: string;

  @IsNumber()
  PORT!: number;

  // Add more properties here
}

@Injectable()
export class AppConfService implements Conf {
  constructor(private config: ConfigService) {}

  get ENV() {
    return this.config.get(`${TOKEN}.ENV`) as Conf['ENV'];
  }
  get URL() {
    return this.config.get(`${TOKEN}.URL`) as Conf['URL'];
  }
  get PORT() {
    return this.config.get(`${TOKEN}.PORT`) as Conf['PORT'];
  }
  // Add more properties here
}

export const confFactory = registerAsWithKeys(TOKEN, KEYS);
export const validate = createValidate(Conf, TOKEN, KEYS);

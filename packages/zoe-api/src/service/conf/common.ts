import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { registerAs } from '@nestjs/config';
import { ValuesType } from 'utility-types';

// TODO: .env 파일이 없으면 env.sample 파일을 복사해서 .env 파일을 만들도록 하자

export const envFilePath = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return ['.env.production.local', '.env.production'];
    default:
      return '.env.local';
  }
})();

export const createValidate =
  <T extends object, K extends readonly string[]>(type: new () => T, prefix: string, keys: K) =>
  (config: Record<string, unknown>) => {
    const targetConfig = keys.reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[key] = config[`${prefix}_${key}`];
      return acc;
    }, {} as Record<ValuesType<K>, unknown>);

    const validatedConf = plainToInstance(type, targetConfig, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConf, { skipMissingProperties: false });

    if (errors.length > 0) {
      // TODO: error 메세지를 보기 좋게 만들어서 throw
      throw new Error(errors.toString());
    }

    // noinspection UnnecessaryLocalVariableJS
    const restoreConfig = keys.reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[`${prefix}_${key}`] = targetConfig[key];
      return acc;
    }, config);

    return restoreConfig;
  };

export const registerAsWithKeys = <T extends readonly string[]>(token: string, keys: T) =>
  registerAs(token, () =>
    keys.reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[key] = process.env[`${token}_${key}`];
      return acc;
    }, {} as Record<ValuesType<typeof keys>, string>),
  );

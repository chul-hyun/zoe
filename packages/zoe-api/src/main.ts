import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

import compression from 'compression';

import helmet from 'helmet';

import { AppModule } from './app.module';
import { AppConfService } from './service/conf/app/app.conf.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
  });

  // TODO cors

  // app.useLogger(); // TODO: use logger (https://docs.nestjs.com/techniques/logger)

  const appConf = app.get(AppConfService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      ...(appConf.ENV === 'development'
        ? {
            enableDebugMessages: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
          }
        : {
            disableErrorMessages: true,
          }),
    }),
  );
  app.use(cookieParser());

  app.use(helmet());
  // TODO csurf 적용

  app.use(compression());

  await app.listen(appConf.PORT).then(() => console.log(`Listening on port ${appConf.PORT}`));
}

bootstrap();

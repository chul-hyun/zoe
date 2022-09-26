import { Module } from '@nestjs/common';

import { AuthDbModule } from './auth/auth-db.module';
import { AuthDbService } from './auth/auth-db.service';
import { UsersDbModule } from './users/users-db.module';
import { UsersDbService } from './users/users-db.service';

@Module({
  imports: [
    // TODO
    // MikroOrmModule.forRoot({
    //   metadataProvider: TsMorphMetadataProvider,
    //   entities: ['./dist/db/entities'],
    //   entitiesTs: ['./src/db/entities'],
    //   baseDir: process.cwd(),
    //   dbName: 'zoe',
    //   user: 'root',
    //   host: 'localhost',
    //   password: 'example',
    //   port: 3306,
    //   type: 'mariadb',
    //
    //   validate: true,
    //   strict: true,
    //   debug: true,
    //
    //   // autoLoadEntities: true,
    // }),
    AuthDbModule,
    UsersDbModule,
  ],
  // exports: [MikroOrmModule],

  providers: [AuthDbService, UsersDbService],
  exports: [AuthDbService, UsersDbService],
})
export class DbModule {}

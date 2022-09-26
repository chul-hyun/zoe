import { Entity, OneToOne, PrimaryKey, Property, Unique } from '@mikro-orm/core';

import { User } from '../users/users-db.entity';

@Entity()
@Unique({ properties: ['user', 'provider', 'externalId'] })
export class Auth {
  @PrimaryKey()
  id!: number;

  @Property()
  provider!: string;

  @Property()
  providerUserId!: string;

  @OneToOne()
  user!: User;
}

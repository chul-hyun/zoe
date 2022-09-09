import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUser(kakaoId: string): Promise<User> {
    return this.usersRepository.findOneBy({ kakaoId });
  }

  addUser(user: { kakaoId: string; nickname: string }): Promise<User> {
    return this.usersRepository.save(user);
  }
}

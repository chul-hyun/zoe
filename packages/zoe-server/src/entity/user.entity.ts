import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  kakaoId: string;

  @Column()
  nickname: string;

  @Column({ default: true })
  isActive: boolean;
}

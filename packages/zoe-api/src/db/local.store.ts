import { User } from './users/users-db.entity';
import { Auth } from './auth/auth-db.entity';

type UserItem = User;
const users: UserItem[] = [
  {
    id: 1,
    nickname: 'test',
  },
];

export const userStore = {
  async find(id: UserItem['id']) {
    return users.find((user) => user.id === id);
  },

  async add(user: Omit<UserItem, 'id'>) {
    const newUser = { ...user, id: users.length + 1 };
    users.push(newUser);
    return newUser;
  },
};

type AuthItem = Omit<Auth, 'user'> & { userId: User['id'] };
const auths: AuthItem[] = [
  {
    id: 1,
    provider: 'kakao',
    providerUserId: '2377365064',
    userId: 1,
  },
];

export const authStore = {
  async find(provider: AuthItem['provider'], providerUserId: AuthItem['providerUserId']) {
    return auths.find(
      (auth) => auth.provider === provider && auth.providerUserId === providerUserId,
    );
  },

  async add(auth: Omit<AuthItem, 'id'>) {
    const newAuth = { ...auth, id: auths.length + 1 };
    auths.push(newAuth);
    return newAuth;
  },

  async addWithUser(auth: Omit<AuthItem, 'id'>, user: Omit<UserItem, 'id'>) {
    const newUser = await userStore.add(user);
    const newAuth = await this.add({ ...auth, userId: newUser.id });
    return { ...newUser, auth: newAuth };
  },
};

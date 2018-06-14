import { observable  } from 'mobx';

export class User {
  _id: string;
  isAdmin: boolean;
  @observable slug: string;
  @observable email: string | null;
  @observable displayName: string | null;
  @observable avatarUrl: string | null;
  @observable isGithubConnected: boolean;

  constructor(params) {
    Object.assign(this, params);
  }
}

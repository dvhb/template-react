import { UserApi, PetApi, Configuration } from '../api';

const basePath = process.env.REACT_APP_API_URL || undefined;

class UserApiSingleton extends UserApi {
  init(apiKey?: string) {
    this.configuration = new Configuration({ basePath, apiKey });
  }
}

class PetApiSingleton extends PetApi {
  init(apiKey?: string) {
    this.configuration = new Configuration({ basePath, apiKey });
  }
}

export const apiUser = new UserApiSingleton();

class AppApi {
  user: UserApiSingleton;
  pet: PetApiSingleton;

  constructor() {
    this.user = new UserApiSingleton();
    this.pet = new PetApiSingleton();
  }

  init(apiKey?: string) {
    this.user.init(apiKey);
    this.pet.init(apiKey);
  }
}

export const api = new AppApi();
api.init();

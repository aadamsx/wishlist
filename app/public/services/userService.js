import database from '../database/database.js';

class UserService {
  constructor() {
    this.path = 'users';
  }

  async getUserList() {
    return database
      .queryCollection(this.path)
      .execute();
  }

  async getUser(id) {
    return database
      .queryDoc(this.path, id)
      .execute();
  }
}

export default new UserService();

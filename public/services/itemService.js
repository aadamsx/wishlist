import database from '../database/database';

class ItemService {
  constructor() {
    this.path = 'items';
  }

  async getItems(userId) {
    return database
      .query(this.path)
      .where('userId', '==', userId)
      .execute();
  }
}

export default new ItemService();

import database from '../database/database';

class ItemService {
  constructor() {
    this.path = 'items';
  }

  async addItem(item) {
    return database
      .create(this.path)
      .withValue(item)
      .execute();
  }

  async getItems(userId) {
    return database
      .queryCollection(this.path)
      .where('userId', '==', userId)
      .execute();
  }
}

export default new ItemService();

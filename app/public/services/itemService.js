import database from '../database/database.js';

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

  async deleteItem(id) {
    return database
      .deleteDoc(this.path, id)
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

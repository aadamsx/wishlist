import database from '../database/database.js';

const ITEM_DEFAULTS = {
  isBought: false,
};

class ItemService {
  constructor() {
    this.path = 'items';
  }

  async addItem(item) {
    return database
      .createDoc(this.path)
      .withValues(Object.assign({}, item, ITEM_DEFAULTS))
      .execute();
  }

  async buyItem(id, buyerId) {
    return database
      .update(this.path, id)
      .withValues({
        buyerId,
        isBought: true,
      })
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

  async unbuyItem(id) {
    return database
      .update(this.path, id)
      .withValues({
        buyerId: null,
        isBought: false,
      })
      .execute();
  }

  async updateItem(id, item) {
    return database
      .update(this.path, id)
      .withValues(Object.assign({}, item))
      .execute();
  }
}

export default new ItemService();

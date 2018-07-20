import CreateDoc from './CreateDoc.js';
import DeleteDoc from './DeleteDoc.js';
import firebase from './firebase.js';
import QueryCollection from './QueryCollection.js';
import QueryDoc from './QueryDoc.js';
import UpdateDoc from './UpdateDoc.js';

class Database {
  constructor() {
    this._db = firebase.firestore();
  }

  create(path) {
    return new CreateDoc(this._db, path);
  }

  deleteDoc(path, docId) {
    return new DeleteDoc(this._db, path, docId);
  }

  queryCollection(path) {
    return new QueryCollection(this._db, path);
  }

  queryDoc(path, docId) {
    return new QueryDoc(this._db, path, docId);
  }

  update(path, docId) {
    return new UpdateDoc(this._db, path, docId);
  }
}

export default new Database();

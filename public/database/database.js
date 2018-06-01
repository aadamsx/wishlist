import 'firebase/firestore';
import CreateDoc from './CreateDoc';
import DeleteDoc from './DeleteDoc';
import firebase from 'firebase/app';
import QueryCollection from './QueryCollection';
import QueryDoc from './QueryDoc';

const firebaseSettings = {
  apiKey: 'AIzaSyDzzsxvPXb5Qhv1xe4qgLeyHPdu1QOMoGc',
  authDomain: 'wishlist-9f1cf.firebaseapp.com',
  databaseURL: 'https://wishlist-9f1cf.firebaseio.com',
  projectId: 'wishlist-9f1cf',
  storageBucket: 'wishlist-9f1cf.appspot.com',
  messagingSenderId: '667334109306',
};

const firestoreSettings = {
  timestampsInSnapshots: true,
};

class Database {
  constructor() {
    firebase.initializeApp(firebaseSettings);
    firebase.firestore().settings(firestoreSettings);

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

  update() {
    throw new Error('Not Implemented');
  }
}

export default new Database();

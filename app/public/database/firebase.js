/* eslint-disable import/extensions */
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
/* eslint-enable import/extensions */

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

firebase.initializeApp(firebaseSettings);
firebase.firestore().settings(firestoreSettings);

export default firebase;

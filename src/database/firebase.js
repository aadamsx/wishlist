/* eslint-disable import/extensions */
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
/* eslint-enable import/extensions */

const { firebaseSettings } = window;

const firestoreSettings = {
  timestampsInSnapshots: true,
};

firebase.initializeApp(firebaseSettings);
firebase.firestore().settings(firestoreSettings);
firebase.firestore().enablePersistence();

export default firebase;

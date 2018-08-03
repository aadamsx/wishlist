import { addNotification } from '../actions/notifications.js';
import { clearCurrentUser, setCurrentUser } from '../actions/currentUser.js';
import database from '../database/database.js';
import firebase from '../database/firebase.js';
import store from '../store.js';

class Authentication {
  constructor() {
    this._auth = firebase.auth();
    this._routerStarted = false;
  }

  start(router) {
    this._auth.onAuthStateChanged(() => {
      if (!this._routerStarted) {
        this._routerStarted = true;

        if (this._auth.currentUser) {
          store.dispatch(setCurrentUser(this._auth.currentUser));
        } else {
          store.dispatch(clearCurrentUser());
        }

        router.start();

        return;
      }

      if (this._auth.currentUser) {
        store.dispatch(setCurrentUser(this._auth.currentUser));

        router('/');
      } else {
        store.dispatch(clearCurrentUser());

        router('/login');
      }
    });
  }

  getUser() {
    return this._auth.currentUser;
  }

  logInWithEmail(email, password) {
    this._auth.signInWithEmailAndPassword(email, password).catch((e) => {
      switch (e.code) {
        case 'auth/invalid-email':
        case 'auth/wrong-password':
          store.dispatch(addNotification('Invalid username/password'));

          break;

        default:
          store.dispatch(addNotification('Unknown error occurred'));
      }
    });
  }

  logOut() {
    this._auth.signOut();
  }

  async signUp(name, email, password) {
    const userRef = await this._auth.createUserWithEmailAndPassword(email, password);

    database
      .createDoc('users')
      .withKey(userRef.user.uid)
      .withValues({ name })
      .execute();
  }
}

export default new Authentication();

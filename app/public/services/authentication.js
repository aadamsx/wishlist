import { addNotification } from '../actions/notifications.js';
import { clearCurrentUser, setCurrentUser } from '../actions/currentUser.js';
import { clearModal } from '../actions/modal.js';
import { hideSpinner, showSpinner } from '../actions/spinner.js';
import database from '../database/database.js';
import firebase from '../database/firebase.js';
import store from '../store.js';
import userService from './userService.js';

class Authentication {
  constructor() {
    this._auth = firebase.auth();
    this._routerStarted = false;
  }

  start(router) {
    this._auth.onAuthStateChanged(async () => {
      if (!this._routerStarted) {
        this._routerStarted = true;

        if (this._auth.currentUser) {
          const user = await userService.getUser(this._auth.currentUser.uid);

          store.dispatch(setCurrentUser(user));

          router.start();
        } else {
          store.dispatch(clearCurrentUser());

          router.start();
        }

        return;
      }

      if (this._auth.currentUser) {
        const user = await userService.getUser(this._auth.currentUser.uid);

        store.dispatch(setCurrentUser(user));

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
    store.dispatch(showSpinner());

    this._auth.signInWithEmailAndPassword(email, password).catch((e) => {
      switch (e.code) {
        case 'auth/invalid-email':
        case 'auth/wrong-password':
          store.dispatch(addNotification('Invalid username/password'));
          store.dispatch(hideSpinner());

          break;

        default:
          console.error(e.code);

          store.dispatch(addNotification('Unknown error occurred'));
      }
    });
  }

  logOut() {
    this._auth.signOut();
  }

  async signUp(name, email, password) {
    store.dispatch(showSpinner());

    const userRef = await this._auth.createUserWithEmailAndPassword(email, password);

    database
      .createDoc('users')
      .withKey(userRef.user.uid)
      .withValues({ name })
      .execute();

    store.dispatch(hideSpinner());
  }

  async updatePassword(currentPassword, newPassword) {
    store.dispatch(showSpinner());

    const credential = firebase.auth.EmailAuthProvider.credential(this._auth.currentUser.email, currentPassword);

    try {
      await this._auth.currentUser.reauthenticateAndRetrieveDataWithCredential(credential);

      await this._auth.currentUser.updatePassword(newPassword);

      store.dispatch(clearModal());
      store.dispatch(addNotification('Password successfully changed', false));
      store.dispatch(hideSpinner());
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          store.dispatch(addNotification('Password is incorrect'));

          return;

        default:
          store.dispatch(addNotification(e.message));
      }
    }
  }
}

export default new Authentication();

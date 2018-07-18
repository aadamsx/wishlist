import { setLoginStatus } from '../actions/loginStatus.js';
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

        router.start();

        store.dispatch(setLoginStatus(!!this._auth.currentUser));

        return;
      }

      if (this._auth.currentUser) {
        store.dispatch(setLoginStatus(true));

        router('/');
      } else {
        store.dispatch(setLoginStatus(false));

        router('/login');
      }
    });
  }

  getUser() {
    return this._auth.currentUser;
  }

  async logInWithEmail(email, password) {
    await this._auth.signInWithEmailAndPassword(email, password);

    return this._auth.currentUser;
  }

  logOut() {
    this._auth.signOut();
  }
}

export default new Authentication();

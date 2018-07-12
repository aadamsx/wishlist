import firebase from '../database/firebase.js';

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
      } else if (!this._auth.currentUser) {
        router('/login');
      } else {
        router('/');
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

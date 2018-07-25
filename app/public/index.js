import './components/main-app/wl-main-app.js';
import { loginPage, unknownPage, userPage } from './page.js';
import authentication from './services/authentication.js';
import page from 'page';
import store from './store.js';

function isLoggedIn(ctx, next) {
  if (!authentication.getUser()) {
    page.redirect('/login');

    return;
  }

  next();
}

function isLoggedOut(ctx, next) {
  if (authentication.getUser()) {
    page.redirect('/');

    return;
  }

  next();
}

function redirectToUserPage() {
  const { currentUser } = store.getState();

  page.redirect(`/users/${currentUser.id}`);
}

page('/', isLoggedIn, redirectToUserPage);
page('/login', isLoggedOut, loginPage);
page('/logout', () => authentication.logOut());
// page('/signup', isLoggedOut, signUpPage);
page('/users/:userId', isLoggedIn, userPage);
page('*', unknownPage);

authentication.start(page);

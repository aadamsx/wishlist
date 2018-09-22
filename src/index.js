import './components/main-app/wl-main-app.js';
import { addNotification } from './actions/notifications.js';
import { installOfflineWatcher } from 'pwa-helpers';
import { loginPage, signUpPage, unknownPage, userPage } from './pages.js';
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
page('/signup', isLoggedOut, signUpPage);
page('/users/:userId', isLoggedIn, userPage);
page('*', unknownPage);

installOfflineWatcher((isOffline) => {
  if (isOffline) {
    store.dispatch(addNotification('No Connection. Functionality is limited'));
  }
});

authentication.start(page);

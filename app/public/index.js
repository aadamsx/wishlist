import './components/main-app/wl-main-app.js';
import { homePage, loginPage, unknownPage } from './page.js';
import authentication from './services/authentication.js';
import page from 'page';

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

page('/', isLoggedIn, homePage);
page('/login', isLoggedOut, loginPage);
page('/logout', () => authentication.logOut());
page('/users/:userId', isLoggedIn, homePage);
page('*', unknownPage);

authentication.start(page);

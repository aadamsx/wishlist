import './components/item-list/wl-item-list.js';
import './components/layout/wl-double-pane.js';
import './components/layout/wl-single-pane.js';
import './components/login/wl-login.js';
import { html } from '@polymer/lit-element';
// import { loadCurrentUser } from './actions/currentUser.js';
import { clearItemList, loadItemList } from './actions/itemList.js';
import { clearUserList, loadUserList } from './actions/userList.js';
import { setPage } from './actions/router.js';
import store from './store.js';

const loginTpl = html`
  <wl-single-pane>
    <wl-login></wl-login>
  </wl-single-pane>
`;

const homeTpl = html`
  <wl-double-pane>
    <wl-user-list slot="left-pane"></wl-user-list>
    <wl-item-list slot="main-pane"></wl-item-list>
  </wl-double-pane>
`;

const loginPage = () => {
  store.dispatch(setPage(loginTpl));
  store.dispatch(clearItemList());
  store.dispatch(clearUserList());
};

const unknownPage = () => {
  const template = html`
    <wl-single-pane>
      <div>Unknown Page</div>
    </wl-single-pane>
  `;

  store.dispatch(setPage(template));
};

const homePage = (ctx) => {
  store.dispatch(setPage(homeTpl));
  store.dispatch(loadUserList());

  if (ctx.params.userId) {
    store.dispatch(loadItemList(ctx.params.userId));
  }
};

export {
  loginPage,
  unknownPage,
  homePage,
};

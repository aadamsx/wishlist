import '../user-list/wl-user-list';
import { connect } from 'pwa-helpers/connect-mixin';
import { html, LitElement } from '@polymer/lit-element';
import { loadUsers } from '../../actions/userList';
import store from '../../store';

class WLUserListPage extends connect(store)(LitElement) {
  static get is() { return 'wl-user-list-page'; }

  static get properties() {
    return {
      _users: Object,
    };
  }

  _render({ _users }) {
    return html`
      <header>Users</header>

      <main id="main">
        <wl-user-list users=${_users}></wl-user-list>
      </main>
    `;
  }

  _firstRendered() {
    store.dispatch(loadUsers());
  }

  _stateChanged(state = {}) {
    this._users = state.userList;
  }
}

customElements.define(WLUserListPage.is, WLUserListPage);

export default WLUserListPage;

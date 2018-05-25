import '../item-list/wl-item-list';
import { connect } from 'pwa-helpers/connect-mixin';
import { html, LitElement } from '@polymer/lit-element';
import { loadCurrentUser } from '../../actions/currentUser';
import { loadItems } from '../../actions/itemList';
import store from '../../store';

class WLUserPage extends connect(store)(LitElement) {
  static get is() { return 'wl-user-page'; }

  static get properties() {
    return {
      _currentUser: Object,
      _items: Object,
      userId: String,
    };
  }

  _render({ _currentUser, _items }) {
    return html`
      <header>User Name:</header>

      <p>${_currentUser.name}</p>
      <p>${_currentUser.username}</p>

      <wl-item-list items=${_items}></wl-item-list>
    `;
  }

  _firstRendered() {
    store.dispatch(loadCurrentUser(this.userId));
    store.dispatch(loadItems(this.userId));
  }

  _stateChanged(state = {}) {
    this._currentUser = state.currentUser;
    this._items = state.itemList;
  }
}

customElements.define(WLUserPage.is, WLUserPage);

export default WLUserPage;

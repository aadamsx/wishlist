import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import store from '../../store.js';

class WLUserList extends connect(store)(LitElement) {
  static get is() { return 'wl-user-list'; }

  static get properties() {
    return {
      _userList: Object,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
        }
      </style>
    `;
  }

  _render({ _userList }) {
    const userList = repeat(
      Object.entries(_userList),
      ([k]) => k,
      ([k, v]) => html`
        <div>
          <a href="/users/${k}">${v.name} (${v.username})</a>
        </div>
      `,
    );

    return html`
      ${WLUserList.styles}
      ${userList}
    `;
  }

  _stateChanged(state = {}) {
    this._userList = state.userList;
  }
}

customElements.define(WLUserList.is, WLUserList);

export default WLUserList;

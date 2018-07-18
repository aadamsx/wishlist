import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';
import store from '../../store.js';

class WLHeader extends connect(store)(LitElement) {
  static get is() { return 'wl-header'; }

  static get properties() {
    return {
      _isLoggedIn: Boolean,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          align-items: center;
          background-color: var(--primary-color);
          box-shadow: 0 0 4px rgba(0,0,0,.14),
                      0 4px 8px rgba(0,0,0,.28);
          color: var(--primary-text);
          display: flex;
          font-size: 1.75rem;
          height: 3.5rem;
          justify-content: space-between;
          padding: 0 1rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this._isLoggedIn = false;
  }

  _render({ _isLoggedIn }) {
    const logoutEl = _isLoggedIn
      ? html`
        <small>
          <a href="logout" on-click=${e => this.logoutHandler(e)}>Logout</a>
        </small>
      `
      : html``;

    return html`
      ${WLHeader.styles}

      <a href="">Wishlist</a>
      ${logoutEl}
    `;
  }

  logoutHandler(e) {
    e.preventDefault();

    authentication.logOut();
  }

  _stateChanged(state) {
    this._isLoggedIn = state.loginStatus;
  }
}

customElements.define(WLHeader.is, WLHeader);

export default WLHeader;

import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLHeader extends connect(store)(LitElement) {
  static get is() { return 'wl-header'; }

  static get properties() {
    return {
      _currentUser: Object,
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

    this._currentUser = {};
  }

  _render({ _currentUser }) {
    const actions = _currentUser.id
      ? html`
        <small>
          <a href="logout">Logout</a>
        </small>
      `
      : html`
        <small>
          <a href="signup">Sign Up</a>
        </small>
      `;

    return html`
      ${WLHeader.styles}

      <a href="">Wishlist</a>
      ${actions}
    `;
  }

  _stateChanged(state) {
    this._currentUser = state.currentUser;
  }
}

customElements.define(WLHeader.is, WLHeader);

export default WLHeader;

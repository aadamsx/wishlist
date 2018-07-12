import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';

class WLHeader extends LitElement {
  static get is() { return 'wl-header'; }

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

  _render() {
    return html`
      ${WLHeader.styles}

      <a href="">Wishlist</a>
      <a href="logout" on-click=${e => this.logoutHandler(e)}>Logout</a>
    `;
  }

  logoutHandler(e) {
    e.preventDefault();

    authentication.logOut();
  }
}

customElements.define(WLHeader.is, WLHeader);

export default WLHeader;

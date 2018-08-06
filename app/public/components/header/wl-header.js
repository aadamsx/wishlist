import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { showChangePasswordModal } from '../../modals.js';
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
          font-size: 1.5rem;
          height: 3.5rem;
          justify-content: space-between;
          padding: 0 1rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        #dropdown {
          background-color: #eeeeee;
          border-radius: 4px;
          box-shadow: 0px 1px 4px 1px #bdbdbd;
          color: #212121;
          font-size: 1rem;
          overflow: hidden;
          position: absolute;
          right: 5px;
        }

        #dropdown a {
          display: block;
          padding: 8px 12px;
        }

        #dropdown a:hover {
          background-color: #ffffff;
          color: #26a69a;
        }

        .caret {
          border-bottom: 6px solid transparent;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #fafafa;
          display: inline-block;
        }

        .pointer {
          cursor: pointer;
        }
      </style>
    `;
  }

  get $dropdown() { return this._root.getElementById('dropdown'); }

  constructor() {
    super();

    this._currentUser = {};
  }

  _render() {
    const actions = this.getActions();

    return html`
      ${WLHeader.styles}

      <a href="">Wishlist</a>
      ${actions}
    `;
  }

  _stateChanged(state) {
    this._currentUser = state.currentUser;
  }

  getActions() {
    return this._currentUser.id
      ? html`
        <div>
          <a class="pointer" on-click="${e => this.handleDropdownToggle(e)}">
            ${this._currentUser.name} <span class="caret"></span>
          </a>

          <div id="dropdown" hidden>
            <a class="pointer" on-click="${() => this.handleChangePasswordClick()}">Change Password</a>
            <a href="logout">Logout</a>
          </div>
        </small>
      `
      : html`
        <small>
          <a href="signup">Sign Up</a>
        </small>
      `;
  }

  handleChangePasswordClick() {
    showChangePasswordModal();
  }

  handleDropdownToggle(e) {
    const hideDropdown = () => {
      this.$dropdown.setAttribute('hidden', true);

      document.removeEventListener('click', hideDropdown);
    };

    const isHidden = this.$dropdown.hasAttribute('hidden');

    if (isHidden) {
      e.stopPropagation();

      this.$dropdown.removeAttribute('hidden');

      document.addEventListener('click', hideDropdown);
    }
  }
}

customElements.define(WLHeader.is, WLHeader);

export default WLHeader;

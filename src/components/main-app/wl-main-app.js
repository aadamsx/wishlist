import '../base/modal/wl-modal.js';
import '../header/wl-header.js';
import '../layout/wl-app-layout.js';
import '../notifications/wl-notifications.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLMainApp extends connect(store)(LitElement) {
  static get is() { return 'wl-main-app'; }

  static get properties() {
    return {
      _currentItem: { type: Object },
      _modal: { type: Object },
      _notifications: { type: Array },
      _page: { type: Object },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          --gray-50:  #fafafa;
          --gray-100: #f5f5f5;
          --gray-200: #eeeeee;
          --gray-300: #e0e0e0;
          --gray-400: #bdbdbd;
          --gray-500: #9e9e9e;
          --gray-600: #757575;
          --gray-700: #616161;
          --gray-800: #424242;
          --gray-900: #212121;

          --black: #000000;
          --white: #ffffff;

          --primary-color: #29b6f6;
          --primary-color--light: #4fc3f7;
          --primary-color--lighter: #81d4fa;
          --primary-color--dark: #039be5;
          --primary-text: #fafafa;
          --primary-text--dark: #212121;

          --danger-color: #ef5350;
          --danger-color--light: #e57373;
          --danger-color--lighter: #ef9a9a;

          --shadow-1: 0 2px 2px 0    rgba(0, 0, 0, 0.14),
                      0 3px 1px -2px rgba(0, 0, 0, 0.12),
                      0 1px 5px 0    rgba(0, 0, 0, 0.2);
          --shadow-2: 0 4px 5px 0    rgba(0, 0, 0, 0.14),
                      0 1px 10px 0   rgba(0, 0, 0, 0.12),
                      0 2px 4px -1px rgba(0, 0, 0, 0.3);
          --shadow-3: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
                      0 3px 14px 2px rgba(0, 0, 0, 0.12),
                      0 5px 5px -3px rgba(0, 0, 0, 0.2);
        }

        body {
          background-color: #fafafa;
        }

        wl-notifications {
          bottom: 1rem;
          left: 0;
          margin: 0 auto;
          position: fixed;
          right: 0;
          width: 400px;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this._modal = {};
    this._notifications = [];
  }

  render() {
    return html`
      ${WLMainApp.styles}

      <wl-app-layout>
        <wl-header></wl-header>
        ${this._page}
      </wl-app-layout>

      <wl-modal ?active="${this._modal.isVisible}">
        ${this._modal.template}
      </wl-modal>

      <wl-notifications .notifications="${this._notifications}"></wl-notifications>
    `;
  }

  _stateChanged(state) {
    if (!state.page) return;

    this._currentItem = state.currentItem;
    this._modal = state.modal;
    this._notifications = state.notifications;
    this._page = state.page;
  }
}

customElements.define(WLMainApp.is, WLMainApp);

export default WLMainApp;

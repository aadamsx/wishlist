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
      _currentItem: Object,
      _isFormOpen: Object,
      _notifications: Array,
      _page: Object,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          --primary-color: #26a69a;
          --primary-text: #fafafa;
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

  _render({ _currentItem, _isFormOpen, _notifications, _page }) {
    return html`
      ${WLMainApp.styles}

      <wl-app-layout>
        <wl-header></wl-header>
        ${_page}
      </wl-app-layout>

      <wl-modal active?="${_isFormOpen}">
        <wl-item-form item=${_currentItem}></wl-item-form>
      </wl-modal>

      <wl-notifications notifications="${_notifications}"></wl-notifications>
    `;
  }

  _stateChanged(state) {
    if (!state.page) return;

    this._currentItem = state.currentItem;
    this._isFormOpen = state.itemFormState;
    this._notifications = state.notifications;
    this._page = state.page;
  }
}

customElements.define(WLMainApp.is, WLMainApp);

export default WLMainApp;

import '../layout/wl-header.js';
import '../user-list/wl-user-list.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLMainApp extends connect(store)(LitElement) {
  static get is() { return 'wl-main-app'; }

  static get properties() {
    return {
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
      </style>
    `;
  }

  _render({ _page }) {
    return html`
      ${WLMainApp.styles}

      <wl-header></wl-header>
      ${_page}
    `;
  }

  _stateChanged(state) {
    if (!state.router.page) return;

    this._page = state.router.page;
  }
}

customElements.define(WLMainApp.is, WLMainApp);

export default WLMainApp;

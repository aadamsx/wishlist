import '../header/wl-header.js';
import '../item-list/wl-item-list.js';
import '../layout/wl-app-layout.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLMainApp extends connect(store)(LitElement) {
  static get is() { return 'wl-main-app'; }

  static get properties() {
    return {
      _currentItem: Object,
      _isFormOpen: Object,
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

  _render({ _currentItem, _isFormOpen, _page }) {
    return html`
      ${WLMainApp.styles}

      <wl-app-layout>
        <wl-header></wl-header>
        ${_page}

        ${_isFormOpen ? html`<wl-item-form item=${_currentItem}></wl-item-form>` : ''}
      </wl-app-layout>
    `;
  }

  _stateChanged(state) {
    if (!state.page) return;

    this._currentItem = state.currentItem;
    this._isFormOpen = state.itemFormState;
    this._page = state.page;
  }
}

customElements.define(WLMainApp.is, WLMainApp);

export default WLMainApp;

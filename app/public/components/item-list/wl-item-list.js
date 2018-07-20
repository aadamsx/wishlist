import './wl-item-list-item.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import store from '../../store.js';

class WLItemList extends connect(store)(LitElement) {
  static get is() { return 'wl-item-list'; }

  static get properties() {
    return {
      _itemList: Object,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
          padding: .5rem;
          border: 1px solid #dddddd;
          border-radius: 4px;
        }

        h2 {
          margin: 0;
        }
      </style>
    `;
  }

  _render({ _itemList }) {
    const itemList = repeat(
      Object.entries(_itemList),
      ([k]) => k,
      ([k, v]) => {
        const item = Object.assign({ id: k }, v);

        return html`<wl-item-list-item item=${item}></wl-item-list-item--user>`;
      },
    );

    return html`
      ${WLItemList.styles}
      <h2>Items</h2>
      ${itemList}
    `;
  }

  _stateChanged(state = {}) {
    this._itemList = state.itemList;
  }
}

customElements.define(WLItemList.is, WLItemList);

export default WLItemList;

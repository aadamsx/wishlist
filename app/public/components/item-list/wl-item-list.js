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

  _render({ _itemList }) {
    const itemList = repeat(
      Object.entries(_itemList),
      ([k]) => k,
      ([k, v]) => html`<wl-item-list-item id=${k} name=${v.title}></wl-item-list-item>`,
    );

    return html`
      ${itemList}
    `;
  }

  _stateChanged(state = {}) {
    this._itemList = state.itemList;
  }
}

customElements.define(WLItemList.is, WLItemList);

export default WLItemList;

import './wl-item-list-item.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import ListCategories from '../../utils/ListCategories.js';
import store from '../../store.js';

class WLItemList extends connect(store)(LitElement) {
  static get is() { return 'wl-item-list'; }

  static get properties() {
    return {
      _itemList: { type: Object },
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

  render() {
    const categories = this.filterItemsIntoCategories(this._itemList);

    const likeList = this.constructItemList(categories.likes);
    const needList = this.constructItemList(categories.needs);
    const wantList = this.constructItemList(categories.wants);

    return html`
      ${WLItemList.styles}

      <h2>Items</h2>
      <h4>Needs</h4>
      ${needList}
      <h4>Wants</h4>
      ${wantList}
      <h4>Likes</h4>
      ${likeList}
    `;
  }

  _stateChanged(state = {}) {
    this._itemList = state.itemList;
  }

  constructItemList(list) {
    return repeat(
      Object.entries(list),
      ([k]) => k,
      ([k, v]) => {
        const item = Object.assign({ id: k }, v);

        return html`<wl-item-list-item .item=${item}></wl-item-list-item>`;
      },
    );
  }

  filterItemsIntoCategories(itemList) {
    const likes = {};
    const needs = {};
    const wants = {};

    Object.entries(itemList).forEach(([k, v]) => {
      switch (v.category) {
        case ListCategories.LIKE:
          likes[k] = v;

          break;

        case ListCategories.NEED:
          needs[k] = v;

          break;

        case ListCategories.WANT:
          wants[k] = v;

          break;

        default:
          console.error(`Unknown Category: ${v.category}`);

          likes[k] = v;
      }
    });

    return {
      likes,
      needs,
      wants,
    };
  }
}

customElements.define(WLItemList.is, WLItemList);

export default WLItemList;

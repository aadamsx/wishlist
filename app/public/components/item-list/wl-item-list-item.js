import { deleteItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLItemListItem extends LitElement {
  static get is() {
    return 'wl-item-list-item';
  }

  static get properties() {
    return {
      id: String,
      name: String,
    };
  }

  _render({ name }) {
    return html`
      <div>${name}</div>
      <button>EDIT</button>
      <button on-click=${e => this.deleteHandler(e)} type="button">DELETE</button>
    `;
  }

  deleteHandler() {
    store.dispatch(deleteItem(this.id));
  }
}

customElements.define(WLItemListItem.is, WLItemListItem);

export default WLItemListItem;

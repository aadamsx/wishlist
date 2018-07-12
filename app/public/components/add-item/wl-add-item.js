import { addItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLAddItem extends LitElement {
  static get is() { return 'wl-add-item'; }

  _render() {
    return html`
      <form on-submit=${e => this._submitHandler(e)}>
        <input id="title" type="text">
        <button>Add</button>
      </form>
    `;
  }

  _submitHandler(e) {
    e.preventDefault();

    const title = this._root.querySelector('#title').value;

    const unsubscribe = store.subscribe(() => {
      this._root.querySelector('#title').value = '';

      unsubscribe();
    });

    store.dispatch(addItem(title));
  }
}

customElements.define(WLAddItem.is, WLAddItem);

export default WLAddItem;

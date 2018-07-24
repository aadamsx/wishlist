import { addItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import ListCategories from '../../utils/ListCategories.js';
import store from '../../store.js';

class WLAddItem extends LitElement {
  static get is() { return 'wl-add-item'; }

  _render() {
    return html`
      <form on-submit=${e => this.submitHandler(e)}>
        <input id="title" type="text">
        <input id="price" type="number">

        <select id="category">
          <option value="${ListCategories.NEED}">Need</option>
          <option value="${ListCategories.WANT}" selected>Want</option>
          <option value="${ListCategories.LIKE}">Like</option>
        </select>

        <input id="url" type="text">
        <button>Add</button>
      </form>
    `;
  }

  submitHandler(e) {
    e.preventDefault();

    const category = this._root.querySelector('#category').value;
    const price = this._root.querySelector('#price').value;
    const title = this._root.querySelector('#title').value;
    const url = this._root.querySelector('#url').value;

    const unsubscribe = store.subscribe(() => {
      this._root.querySelector('#category').value = '1';
      this._root.querySelector('#price').value = '';
      this._root.querySelector('#title').value = '';
      this._root.querySelector('#url').value = '';

      unsubscribe();
    });

    store.dispatch(addItem(title, price, url, category));
  }
}

customElements.define(WLAddItem.is, WLAddItem);

export default WLAddItem;

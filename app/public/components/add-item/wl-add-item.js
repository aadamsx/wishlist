import { addItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import formStyles from '../../styles/formStyles.js';
import ListCategories from '../../utils/ListCategories.js';
import store from '../../store.js';

class WLAddItem extends LitElement {
  static get is() { return 'wl-add-item'; }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        form {
          display: grid;
          grid-template-columns: 1fr 3fr;
          width: 500px;
          gap: 10px;
        }

        div {
          display: contents;
        }

        label {
          align-self: center;
          justify-self: end;
        }

        button {
          grid-column-start: 2;
          justify-self: end;
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${formStyles}
      ${WLAddItem.styles}

      <form on-submit=${e => this.submitHandler(e)}>
        <div>
          <label for="name">Name</label>
          <input id="name" type="text">
        </div>

        <div>
          <label for="price">Price</label>
          <input id="price" type="number">
        </div>

        <div>
          <label for="category">Category</label>

          <select id="category">
            <option value="${ListCategories.NEED}">Need</option>
            <option value="${ListCategories.WANT}" selected>Want</option>
            <option value="${ListCategories.LIKE}">Like</option>
          </select>
        </div>

        <div>
          <label for="url">Url</label>
          <input id="url" type="text">
        </div>

        <button>Add</button>
      </form>
    `;
  }

  submitHandler(e) {
    e.preventDefault();

    const category = this._root.querySelector('#category').value;
    const name = this._root.querySelector('#name').value;
    const price = this._root.querySelector('#price').value;
    const url = this._root.querySelector('#url').value;

    const unsubscribe = store.subscribe(() => {
      this._root.querySelector('#category').value = '1';
      this._root.querySelector('#name').value = '';
      this._root.querySelector('#price').value = '';
      this._root.querySelector('#url').value = '';

      unsubscribe();
    });

    store.dispatch(addItem(name, price, url, category));
  }
}

customElements.define(WLAddItem.is, WLAddItem);

export default WLAddItem;

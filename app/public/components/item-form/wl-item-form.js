import '../base/button/wl-button.js';
import { addItem, updateItem } from '../../actions/itemList.js';
import { clearCurrentItem } from '../../actions/currentItem.js';
import { closeItemForm } from '../../actions/itemFormState.js';
import { html, LitElement } from '@polymer/lit-element';
import formStyles from '../../styles/formStyles.js';
import ListCategories from '../../utils/ListCategories.js';
import store from '../../store.js';

class WLItemForm extends LitElement {
  static get is() { return 'wl-item-form'; }

  static get properties() {
    return {
      item: Object,
    };
  }

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

        label {
          align-self: center;
          justify-self: end;
        }

        .actions {
          grid-column-start: 2;
          justify-self: end;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this.item = {};
  }

  _render() {
    const action = this.item.id ? 'Save' : 'Add';
    const category = this.item.category || ListCategories.WANT;

    return html`
      ${formStyles}
      ${WLItemForm.styles}

      <form on-submit=${e => this.submitHandler(e)}>
        <label for="name">Name</label>
        <input id="name" type="text" value=${this.item.name}>

        <label for="price">Price</label>
        <input id="price" type="number" value="${this.item.price}">

        <label for="category">Category</label>

        <select id="category">
          <option value="${ListCategories.NEED}" selected?="${category === ListCategories.NEED}">Need</option>
          <option value="${ListCategories.WANT}" selected?="${category === ListCategories.WANT}">Want</option>
          <option value="${ListCategories.LIKE}" selected?="${category === ListCategories.LIKE}">Like</option>
        </select>

        <label for="url">Url</label>
        <input id="url" type="text" value="${this.item.url}">

        <div class="actions">
          <wl-button on-click="${e => this.submitHandler(e)}" purpose="primary">${action}</wl-button>
          <wl-button on-click="${() => this.cancelHandler()}">Cancel</wl-button>
        </div>
      </form>
    `;
  }

  _didRender() {
    this._root.querySelector('#name').focus();
  }

  cancelHandler() {
    store.dispatch(clearCurrentItem());
    store.dispatch(closeItemForm());
  }

  submitHandler(e) {
    e.preventDefault();

    const isNew = !this.item.id;

    const category = this._root.querySelector('#category').value;
    const name = this._root.querySelector('#name').value;
    const price = this._root.querySelector('#price').value;
    const url = this._root.querySelector('#url').value;

    if (isNew) {
      store.dispatch(addItem(name, price, url, category));
    } else {
      store.dispatch(updateItem(this.item.id, name, price, url, category));
    }
  }
}

customElements.define(WLItemForm.is, WLItemForm);

export default WLItemForm;

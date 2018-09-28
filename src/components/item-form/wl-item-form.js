import '../base/button/wl-button.js';
import { addItem, updateItem } from '../../actions/itemList.js';
import { addNotification } from '../../actions/notifications.js';
import { clearCurrentItem } from '../../actions/currentItem.js';
import { clearModal } from '../../actions/modal.js';
import { html, LitElement } from '@polymer/lit-element';
import formStyles from '../../styles/formStyles.js';
import ListCategories from '../../utils/ListCategories.js';
import store from '../../store.js';

class WLItemForm extends LitElement {
  static get is() { return 'wl-item-form'; }

  static get properties() {
    return {
      item: { type: Object },
    };
  }

  static get styles() {
    return html``;
  }

  /* eslint-disable lines-between-class-members */
  get $category() { return this.renderRoot.getElementById('category'); }
  get $name() { return this.renderRoot.getElementById('name'); }
  get $price() { return this.renderRoot.getElementById('price'); }
  get $url() { return this.renderRoot.getElementById('url'); }
  /* eslint-enable */

  constructor() {
    super();

    this.item = {};
  }

  render() {
    const action = this.item.id ? 'Save' : 'Add';
    const category = this.item.category || ListCategories.WANT;
    const title = this.item.id ? 'Edit Item' : 'Add Item';

    return html`
      ${formStyles}
      ${WLItemForm.styles}

      <h2>${title}</h2>

      <form @submit=${e => this.submitHandler(e)}>
        <label class="required" for="name">Name</label>
        <input id="name" type="text" value="${this.item.name || ''}">

        <label for="price">Price</label>
        <input id="price" type="number" value="${this.item.price}">

        <label for="category">Category</label>

        <select id="category">
          <option value="${ListCategories.NEED}" ?selected="${category === ListCategories.NEED}">Need</option>
          <option value="${ListCategories.WANT}" ?selected="${category === ListCategories.WANT}">Want</option>
          <option value="${ListCategories.LIKE}" ?selected="${category === ListCategories.LIKE}">Like</option>
        </select>

        <label for="url">Url</label>
        <input id="url" type="text" value="${this.item.url || ''}">

        <div class="actions">
          <wl-button @click="${e => this.submitHandler(e)}" primary>${action}</wl-button>
          <wl-button @click="${() => this.cancelHandler()}">Cancel</wl-button>
        </div>
      </form>
    `;
  }

  firstUpdated() {
    this.$name.focus();
  }

  cancelHandler() {
    store.dispatch(clearCurrentItem());
    store.dispatch(clearModal());
  }

  submitHandler(e) {
    e.preventDefault();

    const isNew = !this.item.id;

    const category = this.$category.value;
    const name = this.$name.value;
    const price = this.$price.value;
    const url = this.$url.value;

    if (name.trim().length === 0) {
      store.dispatch(addNotification('Name must not be blank'));

      return;
    }

    if (isNew) {
      store.dispatch(addItem(name, price, url, category));
    } else {
      store.dispatch(updateItem(this.item.id, name, price, url, category));
    }
  }
}

customElements.define(WLItemForm.is, WLItemForm);

export default WLItemForm;

import '../base/button/wl-button.js';
import { buyItem, deleteItem, unbuyItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import { setCurrentItem } from '../../actions/currentItem.js';
import { showItemFormModal } from '../../modals.js';
import store from '../../store.js';

class WLItemListItem extends LitElement {
  static get is() {
    return 'wl-item-list-item';
  }

  static get properties() {
    return {
      item: { type: Object },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
          line-height: 1.75rem;
        }

        .container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .bought {
          font-style: italic;
          text-decoration: line-through;
        }
      </style>
    `;
  }

  render() {
    // if (!this.item) return html``;

    const actions = this.getActions();
    const classes = this.item.isBought ? 'bought' : '';

    const name = this.item.url
      ? html`
        <div class="${classes}">
          <a href="${this.item.url}" rel="noopener" target="_blank">${this.item.name}</a> ($${this.item.price})
        </div>
      `
      : html`
        <div class="${classes}">
          ${this.item.name} ($${this.item.price})
        </div>
      `;

    return html`
      ${WLItemListItem.styles}
      <div class="container">
        ${name}

        <div>${actions}</div>
      </div>
    `;
  }

  /* -- Event Handlers -- */
  buyHandler() {
    store.dispatch(buyItem(this.item.id));
  }

  deleteHandler() {
    store.dispatch(deleteItem(this.item.id));
  }

  editHandler() {
    store.dispatch(setCurrentItem(this.item));

    showItemFormModal();
  }

  unbuyHandler() {
    store.dispatch(unbuyItem(this.item.id));
  }

  /* -- Template Helpers -- */
  getActions() {
    const { currentUser } = store.getState();

    switch (this.item.isBought) {
      case undefined:
        return html`
          <wl-button @click="${e => this.editHandler(e)}">Edit</wl-button>
          <wl-button @click="${e => this.deleteHandler(e)}">Delete</wl-button>
        `;

      case true:
        return this.item.buyerId === currentUser.id
          ? html`
            <wl-button @click="${() => this.unbuyHandler()}">Un-Buy</wl-button>
          `
          : html``;

      case false:
        return html`
          <wl-button @click="${() => this.buyHandler()}">Buy</wl-button>
        `;

      default:
        return html``;
    }
  }
}

customElements.define(WLItemListItem.is, WLItemListItem);

export default WLItemListItem;

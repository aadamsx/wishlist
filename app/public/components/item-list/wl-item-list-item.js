import { buyItem, deleteItem, unbuyItem } from '../../actions/itemList.js';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class WLItemListItem extends LitElement {
  static get is() {
    return 'wl-item-list-item';
  }

  static get properties() {
    return {
      item: Object,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
          line-height: 2rem;
        }

        .container {
          display: flex;
          justify-content: space-between;
        }

        .bought {
          font-style: italic;
          text-decoration: line-through;
        }
      </style>
    `;
  }

  _render({ item }) {
    if (!item) return html``;

    const actions = this.getActions();
    const classes = item.isBought ? 'bought' : '';

    const title = item.url
      ? html`
        <div class$="${classes}">
          <a href=${item.url} target="_blank">${item.title}</a> ($${item.price})
        </div>
      `
      : html`
        <div class$="${classes}">
          ${item.title} ($${item.price})
        </div>
      `;

    return html`
      ${WLItemListItem.styles}
      <div class="container">
        ${title}

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

  unbuyHandler() {
    store.dispatch(unbuyItem(this.item.id));
  }

  /* -- Template Helpers -- */
  getActions() {
    const { currentUser } = store.getState();

    switch (this.item.isBought) {
      case undefined:
        return html`
          <button type="button">Edit</button>
          <button on-click="${e => this.deleteHandler(e)}" type="button">Delete</button>
        `;

      case true:
        return this.item.buyerId === currentUser.id
          ? html`
            <button on-click="${() => this.unbuyHandler()}" type="button">Un-Buy</button>
          `
          : html``;

      case false:
        return html`
          <button on-click="${() => this.buyHandler()}" type="button">Buy</button>
        `;

      default:
        return html``;
    }
  }
}

customElements.define(WLItemListItem.is, WLItemListItem);

export default WLItemListItem;

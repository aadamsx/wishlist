import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat';

class WLItemList extends LitElement {
  static get is() { return 'wl-item-list'; }

  static get properties() {
    return {
      items: Object,
    };
  }

  _render({ items }) {
    const itemList = repeat(
      Object.entries(items),
      ([k]) => k,
      ([, v]) => html`<li>${v.title}</li>`,
    );

    return html`
      <ul>${itemList}</ul>
    `;
  }
}

customElements.define(WLItemList.is, WLItemList);

export default WLItemList;

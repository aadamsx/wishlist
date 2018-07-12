import { html, LitElement } from '@polymer/lit-element';
import page from 'page';

class WLLink extends LitElement {
  static get is() { return 'wl-link'; }

  static get properties() {
    return {
      to: String,
    };
  }

  constructor() {
    super();

    this.handleClick = this._handleClick.bind(this);
  }

  _render({ to }) {
    return html`
      <a href$=${to} on-click=${this.handleClick}>
        <slot></slot>
      </a>
    `;
  }

  _handleClick(e) {
    e.preventDefault();

    page.show(this.to);
  }
}

customElements.define(WLLink.is, WLLink);

export default WLLink;

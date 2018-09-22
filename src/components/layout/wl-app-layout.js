import { html, LitElement } from '@polymer/lit-element';

class WLAppLayout extends LitElement {
  static get is() { return 'wl-app-layout'; }

  static get styles() {
    return html`
      <style>
        :host {
          background-color: var(--gray-50);
          display: grid;
          grid-template-rows: 56px auto;
          min-height: 100vh;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${WLAppLayout.styles}
      <slot></slot>
    `;
  }
}

customElements.define(WLAppLayout.is, WLAppLayout);

export default WLAppLayout;

import { html, LitElement } from '@polymer/lit-element';

class WLAppLayout extends LitElement {
  static get is() { return 'wl-app-layout'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: grid;
          gap: 1rem;
          grid-template-rows: 56px calc(100vh - 56px - 1rem);
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLAppLayout.styles}
      <slot></slot>
    `;
  }
}

customElements.define(WLAppLayout.is, WLAppLayout);

export default WLAppLayout;

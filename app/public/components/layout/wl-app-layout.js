import { html, LitElement } from '@polymer/lit-element';

class WLAppLayout extends LitElement {
  static get is() { return 'wl-app-layout'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
        }

        .grid {
          display: grid;
          grid-template-rows: 56px calc(100vh - 56px);
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLAppLayout.styles}

      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(WLAppLayout.is, WLAppLayout);

export default WLAppLayout;

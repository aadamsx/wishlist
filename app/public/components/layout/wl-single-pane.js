import { html, LitElement } from '@polymer/lit-element';

class WLSinglePane extends LitElement {
  static get is() { return 'wl-single-pane'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr minmax(500px, 2fr) 1fr;
          grid-template-areas: ". content .";
        }

        div {
          grid-area: content;
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLSinglePane.styles}

      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(WLSinglePane.is, WLSinglePane);

export default WLSinglePane;

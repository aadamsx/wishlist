import { html, LitElement } from '@polymer/lit-element';

class WLDoublePane extends LitElement {
  static get is() { return 'wl-double-pane'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: grid;
          gap: .5rem;
          grid-template-areas: ". left-pane main-pane .";
          grid-template-columns: 1fr minmax(300px, 1fr) minmax(500px, 2fr) 1fr;
          overflow: auto;
        }

        .left-pane {
          grid-area: left-pane;
        }

        .main-pane {
          grid-area: main-pane;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${WLDoublePane.styles}

      <div class="left-pane">
        <slot name="left-pane"></slot>
      </div>

      <div class="main-pane">
        <slot name="main-pane"></slot>
      </div>
    `;
  }
}

customElements.define(WLDoublePane.is, WLDoublePane);

export default WLDoublePane;

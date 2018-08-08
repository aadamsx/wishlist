import { html, LitElement } from '@polymer/lit-element';

class WLSpinner extends LitElement {
  static get is() { return 'wl-spinner'; }

  static get properties() {
    return {};
  }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        .spinner {
          display: flex;
          flex-direction: row;
          height: 15px;
          width: calc(30px * 3);
        }

        .spinner .dot {
          animation: spinner-animation 1000ms ease infinite 0ms;
          border-radius: 50%;
          border: calc(15px / 5) solid #e0f2f1;
          height: 15px;
          margin: 0 calc(15px / 2);
          transform: scale(0);
          width: 15px;
        }

        .spinner .dot:nth-child(1) {
          animation-delay: calc(300ms * 1);
        }

        .spinner .dot:nth-child(2) {
          animation-delay: calc(300ms * 2);
        }

        .spinner .dot:nth-child(3) {
          animation-delay: calc(300ms * 3);

        }

        @keyframes spinner-animation {
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLSpinner.styles}

      <div class="spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  }
}

customElements.define(WLSpinner.is, WLSpinner);

export default WLSpinner;

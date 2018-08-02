import { html, LitElement } from '@polymer/lit-element';

class WLModal extends LitElement {
  static get is() { return 'wl-modal'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
        }

        .backdrop {
          background-color: #333333;
          bottom: 0;
          left: 0;
          opacity: .5;
          position: fixed;
          right: 0;
          top: 0;
        }

        .modal {
          align-items: center;
          background-color: transparent;
          bottom: 0;
          display: flex;
          justify-content: center;
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
        }

        .modal__body {
          background-color: #fafafa;
          border-radius: 4px;
          margin-top: -150px;
          padding: 1rem;
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLModal.styles}
      <div class="backdrop"></div>

      <div class="modal">
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(WLModal.is, WLModal);

export default WLModal;

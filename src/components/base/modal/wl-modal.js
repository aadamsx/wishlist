import { html, LitElement } from '@polymer/lit-element';

class WLModal extends LitElement {
  static get is() { return 'wl-modal'; }

  static get properties() {
    return {
      active: { type: Boolean },
    };
  }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        .backdrop {
          background-color: var(--gray-500);
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
          animation: slideUp .3s cubic-bezier(.36,.82,.56,.99) forwards;
          background-color: var(--white);
          border-radius: 4px;
          bottom: 0;
          box-shadow: var(--shadow-3);
          padding: 1rem;
          position: fixed;
          width: 100%;
        }

        @media screen and (min-width: 768px) {
          .modal__body {
            animation: none;
            margin-top: -150px;
            position: static;
            width: 525px;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(200px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      </style>
    `;
  }

  render() {
    if (!this.active) return html``;

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

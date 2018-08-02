import { html, LitElement } from '@polymer/lit-element';

class WLFab extends LitElement {
  static get is() { return 'wl-fab'; }

  static get styles() {
    return html`
      <style>
        :host {
          --button__background-color: var(--primary-color);
          --button__background-color--hover: #009688;
          --button__background-color--active: #00897b;
          --button__color: #fafafa;

          display: inline-block;
        }

        button {
          background-color: var(--button__background-color);
          border-radius: 2rem;
          border: 1px solid #dddddd;
          color: var(--button__color);
          font-size: 2.5rem;
          height: 4rem;
          width: 4rem;
        }

        button:focus,
        button:hover {
          background-color: var(--button__background-color--hover);
          cursor: pointer;
          outline: none;
        }

        button:active {
          background-color: var(--button__background-color--active);
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${WLFab.styles}
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define(WLFab.is, WLFab);

export default WLFab;

import { html, LitElement } from '@polymer/lit-element';

class WLFab extends LitElement {
  static get is() { return 'wl-fab'; }

  static get styles() {
    return html`
      <style>
        :host {
          --button__bg-color: var(--primary-color);
          --button__bg-color--hover: var(--primary-color--light);
          --button__bg-color--active: var(--primary-color--dark);
          --button__color: var(--primary-text);

          display: inline-block;
        }

        button {
          background-color: var(--button__bg-color);
          border-radius: 2rem;
          border: none;
          box-shadow: var(--shadow-2);
          color: var(--button__color);
          font-size: 2.5rem;
          height: 4rem;
          transition: all .25s;
          width: 4rem;
        }

        button:focus,
        button:hover {
          background-color: var(--button__bg-color--hover);
          box-shadow: var(--shadow-3);
          cursor: pointer;
          outline: none;
        }

        button:active {
          background-color: var(--button__bg-color--active);
        }
      </style>
    `;
  }

  render() {
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

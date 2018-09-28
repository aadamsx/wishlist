import { html, LitElement } from '@polymer/lit-element';

class WLFab extends LitElement {
  static get is() { return 'wl-fab'; }

  static get styles() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        button {
          background-color: var(--wl-fab__bg-color, #1e88e5);
          border-radius: 2rem;
          border: none;
          box-shadow: var(--shadow-2);
          color: var(--wl-fab__color, #fafafa);
          font-size: 2.5rem;
          height: 4rem;
          transition: all .25s;
          width: 4rem;
        }

        button:focus,
        button:hover {
          background-color: var(--wl-fab__bg-color--hover, #1976d2);
          box-shadow: var(--shadow-3);
          cursor: pointer;
          outline: none;
        }

        button:active {
          background-color: var(--wl-fab__bg-color--active, #005cb2);
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

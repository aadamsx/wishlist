import { html, LitElement } from '@polymer/lit-element';
import classNames from 'classnames';

class WLButton extends LitElement {
  static get is() { return 'wl-button'; }

  static get properties() {
    return {
      primary: { type: Boolean },
      secondary: { type: Boolean },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: contents;
        }

        button {
          background-color: var(--wl-button__bg-color, #eceff1);
          border-radius: calc(1.75rem / 2);
          border-width: 0px;/* solid #dddddd; */
          height: 1.75rem;
          /* line-height: 1.75rem; */
          padding: 0 1rem;
          transition: all .25s;
        }

        button:focus,
        button:hover {
          background-color: var(--wl-button__bg-color--hover, #cfd8dc);
          cursor: pointer;
          outline: none;
        }

        button:active {
          background-color: var(--wl-button__bg-color--active, #b0bec5);
        }

        .primary {
          background-color: var(--wl-button--primary__bg-color, #1e88e5);
          border-color: var(--wl-button--primary__bg-color, #1e88e5);
          color: var(--wl-button--primary__color, #fafafa);
        }

        .primary:focus,
        .primary:hover {
          background-color: var(--wl-button--primary__bg-color--hover, #1976d2);
          border-color: var(--wl-button--primary__bg-color--hover, #1976d2);
        }

        .primary:active {
          background-color: var(--wl-button--primary__bg-color--active, #005cb2);
          border-color: var(--wl-button--primary__bg-color--hover, #005cb2);
        }

        .secondary {
          background-color: var(--wl-button--secondary__bg-color, #546e7a);
          border-color: var(--wl-button--secondary__bg-color, #546e7a);
          color: var(--wl-button--secondary__color, #fafafa);
        }

        .secondary:focus,
        .secondary:hover {
          background-color: var(--wl-button--secondary__bg-color--hover, #819ca9);
        }

        .secondary:active {
          background-color: var(--wl-button--secondary__bg-color--active, #29434e);
        }
      </style>
    `;
  }

  render() {
    const classes = classNames({
      primary: this.primary,
      secondary: this.secondary,
    });

    return html`
      ${WLButton.styles}
      <button class="${classes}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define(WLButton.is, WLButton);

export default WLButton;

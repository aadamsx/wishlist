import { html, LitElement } from '@polymer/lit-element';
import classNames from 'classnames';

class WLButton extends LitElement {
  static get is() { return 'wl-button'; }

  static get properties() {
    return {
      primary: Boolean,
      secondary: Boolean,
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          --button__background-color: #eceff1;
          --button__background-color--hover: #cfd8dc;
          --button__background-color--active: #b0bec5;
          --button-primary__background-color: var(--primary-color);
          --button-primary__background-color--hover: #009688;
          --button-primary__background-color--active: #00897b;
          --button-primary__color: #fafafa;

          display: contents;
        }

        button {
          background-color: var(--button__background-color);
          border-radius: calc(1.75rem / 2);
          border: 1px solid #dddddd;
          height: 1.75rem;
          line-height: 1.75rem;
          padding: 0 1rem;
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

        .primary {
          background-color: var(--button-primary__background-color);
          border-color: var(--button-primary__background-color);
          color: var(--button-primary__color);
        }

        .primary:focus,
        .primary:hover {
          background-color: var(--button-primary__background-color--hover);
        }

        .primary:active {
          background-color: var(--button-primary__background-color--active);
        }

        /* .secondary {
          background-color: var(--button-primary__background-color);
          border-color: var(--button-primary__background-color);
          color: var(--button-primary__color);
        }

        .secondary:focus,
        .secondary:hover {
          background-color: var(--button-primary__background-color--hover);
        }

        .secondary:active {
          background-color: var(--button-primary__background-color--active);
        } */
      </style>
    `;
  }

  _render({ primary, secondary }) {
    const classes = classNames({ primary, secondary });

    return html`
      ${WLButton.styles}
      <button class$=${classes}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define(WLButton.is, WLButton);

export default WLButton;

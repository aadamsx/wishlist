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
          --button__bg-color: #eceff1;
          --button__bg-color--hover: #cfd8dc;
          --button__bg-color--active: #b0bec5;
          --button-primary__bg-color: var(--primary-color);
          --button-primary__bg-color--hover: var(--primary-color--light);
          --button-primary__bg-color--active: var(--primary-color--dark);
          --button-primary__color: #fafafa;

          display: contents;
        }

        button {
          background-color: var(--button__bg-color);
          border-radius: calc(1.75rem / 2);
          border: 1px solid #dddddd;
          height: 1.75rem;
          line-height: 1.75rem;
          padding: 0 1rem;
          transition: all .25s;
        }

        button:focus,
        button:hover {
          background-color: var(--button__bg-color--hover);
          cursor: pointer;
          outline: none;
        }

        button:active {
          background-color: var(--button__bg-color--active);
        }

        .primary {
          background-color: var(--button-primary__bg-color);
          border-color: var(--button-primary__bg-color);
          color: var(--button-primary__color);
        }

        .primary:focus,
        .primary:hover {
          background-color: var(--button-primary__bg-color--hover);
        }

        .primary:active {
          background-color: var(--button-primary__bg-color--active);
        }

        /* .secondary {
          background-color: var(--button-primary__bg-color);
          border-color: var(--button-primary__bg-color);
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

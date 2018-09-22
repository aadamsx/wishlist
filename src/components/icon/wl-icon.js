import { html, LitElement } from '@polymer/lit-element';

class WLIcon extends LitElement {
  static get is() { return 'wl-icon'; }

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .material-icons {
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          color: inherit;
          direction: ltr;
          display: inline-block;
          font-family: 'Material Icons';
          font-size: inherit;
          font-style: normal;
          font-weight: normal;
          letter-spacing: normal;
          line-height: 1;
          text-transform: none;
          white-space: nowrap;
          word-wrap: normal;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${WLIcon.styles}

      <i class="material-icons">${this.icon}</i>
    `;
  }
}

customElements.define(WLIcon.is, WLIcon);

export default WLIcon;

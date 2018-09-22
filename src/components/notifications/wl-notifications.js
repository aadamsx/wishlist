import './wl-notification-item.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat.js';

class WLNotifcations extends LitElement {
  static get is() { return 'wl-notifications'; }

  static get properties() {
    return {
      notifications: { type: Array },
    };
  }

  render() {
    const notifications = repeat(
      this.notifications,
      n => n.key,
      n => html`
        <wl-notification-item
          ?isError="${n.isError}"
          .key="${n.key}"
          .text="${n.text}"
        >
        </wl-notification-item>
      `,
    );

    return html`${notifications}`;
  }
}

customElements.define(WLNotifcations.is, WLNotifcations);

export default WLNotifcations;

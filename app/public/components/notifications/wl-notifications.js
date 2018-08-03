import './wl-notification-item.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';

class WLNotifcations extends LitElement {
  static get is() { return 'wl-notifications'; }

  static get properties() {
    return {
      notifications: Array,
    };
  }

  constructor() {
    super();

    this.notifications = [];
  }

  _render() {
    const notifications = repeat(
      this.notifications,
      n => n.key,
      n => html`<wl-notification-item key="${n.key}" text="${n.text}"></wl-notification-item>`,
    );

    return html`${notifications}`;
  }
}

customElements.define(WLNotifcations.is, WLNotifcations);

export default WLNotifcations;

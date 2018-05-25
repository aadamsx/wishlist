import '../link/wl-link';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat';

class WLUserList extends LitElement {
  static get is() { return 'wl-user-list'; }

  static get properties() {
    return {
      users: Object,
    };
  }

  /* eslint-disable indent */
  _render({ users }) {
    const userList = repeat(
      Object.entries(users),
      ([k]) => k,
      ([k, v]) => html`
        <li>
          <wl-link to="/users/${k}">${v.name} (${v.username})</wl-link>
        </li>
      `,
    );

    return html`
      <ul>${userList}</ul>
    `;
  }
  /* eslint-enable */
}

customElements.define(WLUserList.is, WLUserList);

export default WLUserList;

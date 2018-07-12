import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';

class WlLogin extends LitElement {
  static get is() { return 'wl-login'; }

  _render() {
    return html`
      <form on-submit=${e => this._submitHandler(e)}>
        <label for="email">Email</label>
        <input id="email" type="email">
        <label for="password">Password</label>
        <input id="password" type="password">
        <button>Submit</button>
      </form>
    `;
  }

  async _submitHandler(e) {
    e.preventDefault();

    const email = this._root.getElementById('email').value;
    const password = this._root.getElementById('password').value;

    authentication.logInWithEmail(email, password);
  }
}

customElements.define(WlLogin.is, WlLogin);

export default WlLogin;

import '../base/button/wl-button.js';
import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';
import formStyles from '../../styles/formStyles.js';

class WlLogin extends LitElement {
  static get is() { return 'wl-login'; }

  static get styles() {
    return html`
      <style>
        h2 {
          text-align: center;
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${formStyles}
      ${WlLogin.styles}

      <h2>Login</h2>

      <form on-submit="${e => this._submitHandler(e)}">
        <label class="required" for="email">Email</label>
        <input id="email" type="email">
        <label class="required" for="password">Password</label>
        <input id="password" type="password">

        <div class="actions">
          <wl-button on-click="${e => this._submitHandler(e)}" primary>Submit</wl-button>
        </div>
      </form>
    `;
  }

  _didRender() {
    this._root.getElementById('email').focus();
  }

  _submitHandler(e) {
    e.preventDefault();

    const email = this._root.getElementById('email').value;
    const password = this._root.getElementById('password').value;

    authentication.logInWithEmail(email, password);
  }
}

customElements.define(WlLogin.is, WlLogin);

export default WlLogin;

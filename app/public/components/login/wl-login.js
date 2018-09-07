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

  render() {
    return html`
      ${formStyles}
      ${WlLogin.styles}

      <h2>Login</h2>

      <form @submit="${e => this._submitHandler(e)}">
        <label class="required" for="email">Email</label>
        <input id="email" type="email">
        <label class="required" for="password">Password</label>
        <input id="password" type="password">

        <div class="actions">
          <wl-button @click="${e => this._submitHandler(e)}" primary>Submit</wl-button>
        </div>
      </form>
    `;
  }

  firstUpdated() {
    this.renderRoot.getElementById('email').focus();
  }

  _submitHandler(e) {
    e.preventDefault();

    const email = this.renderRoot.getElementById('email').value;
    const password = this.renderRoot.getElementById('password').value;

    authentication.logInWithEmail(email, password);
  }
}

customElements.define(WlLogin.is, WlLogin);

export default WlLogin;

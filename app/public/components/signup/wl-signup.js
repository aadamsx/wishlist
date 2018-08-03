import '../base/button/wl-button.js';
import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';
import formStyles from '../../styles/formStyles.js';

class WLSignUp extends LitElement {
  static get is() { return 'wl-signup'; }

  static get styles() {
    return html`
      <style>
        form {
          grid-template-columns: 150px 5fr;
        }

        h2 {
          text-align: center;
        }
      </style>
    `;
  }

  _render() {
    return html`
      ${formStyles}
      ${WLSignUp.styles}

      <h2>Sign Up</h2>

      <form on-submit="${e => this._submitHandler(e)}">
        <label class="required" for="name">Name</label>
        <input id="name" type="text">
        <label class="required" for="email">Email</label>
        <input id="email" type="email">
        <label class="required" for="password">Password</label>
        <input id="password" type="password">
        <label class="required" for="confirm">Confirm Password</label>
        <input id="confirm" type="password">

        <div class="actions">
          <wl-button on-click="${e => this._submitHandler(e)}" purpose="primary">Submit</wl-button>
        </div>
      </form>
    `;
  }

  _didRender() {
    this._root.getElementById('name').focus();
  }

  _submitHandler(e) {
    e.preventDefault();

    const confirm = this._root.getElementById('confirm').value;
    const email = this._root.getElementById('email').value;
    const name = this._root.getElementById('name').value;
    const password = this._root.getElementById('password').value;

    if (password !== confirm) {
      // TODO: Notify user
      return;
    }

    authentication.signUp(name, email, password);
  }
}

customElements.define(WLSignUp.is, WLSignUp);

export default WLSignUp;

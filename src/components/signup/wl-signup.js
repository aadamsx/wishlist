import '../base/button/wl-button.js';
import { addNotification } from '../../actions/notifications.js';
import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';
import formStyles from '../../styles/formStyles.js';
import store from '../../store.js';

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

  /* eslint-disable lines-between-class-members */
  get $confirm() { return this.renderRoot.getElementById('confirm'); }
  get $email() { return this.renderRoot.getElementById('email'); }
  get $name() { return this.renderRoot.getElementById('name'); }
  get $password() { return this.renderRoot.getElementById('password'); }
  /* eslint-enable */

  render() {
    return html`
      ${formStyles}
      ${WLSignUp.styles}

      <h2>Sign Up</h2>

      <form @submit="${e => this._submitHandler(e)}">
        <label class="required" for="name">Name</label>
        <input id="name" type="text">
        <label class="required" for="email">Email</label>
        <input id="email" type="email">
        <label class="required" for="password">Password</label>
        <input id="password" type="password">
        <label class="required" for="confirm">Confirm Password</label>
        <input id="confirm" type="password">

        <div class="actions">
          <wl-button @click="${e => this._submitHandler(e)}" primary>Submit</wl-button>
        </div>
      </form>
    `;
  }

  firstUpdated() {
    this.$name.focus();
  }

  _submitHandler(e) {
    e.preventDefault();

    const confirm = this.$confirm.value;
    const email = this.$email.value;
    const name = this.$name.value;
    const password = this.$password.value;

    if (this.isInvalid(name, email, password, confirm)) return;


    authentication.signUp(name, email, password);
  }

  isInvalid(name, email, password, confirm) {
    let isInvalid = false;

    if (password !== confirm) {
      store.dispatch(addNotification('Passwords must match'));

      isInvalid = true;
    }

    if (password.trim().length === 0) {
      store.dispatch(addNotification('Password must not be blank'));

      isInvalid = true;
    }

    if (email.trim().length === 0) {
      store.dispatch(addNotification('Email must not be blank'));

      isInvalid = true;
    }

    if (name.trim().length === 0) {
      store.dispatch(addNotification('Name must not be blank'));

      isInvalid = true;
    }

    return isInvalid;
  }
}

customElements.define(WLSignUp.is, WLSignUp);

export default WLSignUp;

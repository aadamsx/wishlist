import '../base/button/wl-button.js';
import { addNotification } from '../../actions/notifications.js';
import { clearModal } from '../../actions/modal.js';
import { html, LitElement } from '@polymer/lit-element';
import authentication from '../../services/authentication.js';
import formStyles from '../../styles/formStyles.js';
import store from '../../store.js';

class WLPasswordForm extends LitElement {
  static get is() { return 'wl-password-form'; }

  static get styles() {
    return html`
      <style>
        form {
          grid-template-columns: 2fr 5fr;
          width: 500px;
        }
      </style>
    `;
  }

  get $confirm() { return this.renderRoot.querySelector('#confirm'); }

  get $current() { return this.renderRoot.querySelector('#current'); }

  get $new() { return this.renderRoot.querySelector('#new'); }

  render() {
    return html`
      ${formStyles}
      ${WLPasswordForm.styles}

      <h2>Change Password</h2>

      <form @submit="${() => this.handleFormSubmit()}">
        <label class="required" for="current">Current Password</label>
        <input id="current" type="password" required>

        <label class="required" for="new">New Password</label>
        <input id="new" type="password" required>

        <label class="required" for="confirm">Confirm Password</label>
        <input id="confirm" type="password" required>

        <div class="actions">
          <wl-button @click="${() => this.handleFormSubmit()}" primary>Submit</wl-button>
          <wl-button @click="${() => this.handleCancelClick()}">Cancel</wl-button>
        </div>
      </form>
    `;
  }

  firstUpdated() {
    this.$current.focus();
  }

  /* -- Event Handlers -- */
  handleCancelClick() {
    store.dispatch(clearModal());
  }

  handleFormSubmit() {
    const currentPassword = this.$current.value;
    const newPassword = this.$new.value;
    const confirmPassword = this.$confirm.value;

    if (newPassword !== confirmPassword) {
      store.dispatch(addNotification('Passwords must match'));

      return;
    }

    authentication.updatePassword(currentPassword, newPassword);
  }
}

customElements.define(WLPasswordForm.is, WLPasswordForm);

export default WLPasswordForm;

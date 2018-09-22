import './components/item-form/wl-item-form.js';
import './components/password-form/wl-password-form.js';
import { html } from '@polymer/lit-element';
import { setModal } from './actions/modal.js';
import store from './store.js';

const changePasswordFormTpl = html`<wl-password-form></wl-password-form>`;
const itemFormTpl = currentItem => html`<wl-item-form .item="${currentItem}"></wl-item-form>`;

const showChangePasswordModal = () => {
  store.dispatch(setModal(changePasswordFormTpl));
};

const showItemFormModal = () => {
  const { currentItem } = store.getState();

  store.dispatch(setModal(itemFormTpl(currentItem)));
};

export {
  showChangePasswordModal,
  showItemFormModal,
};

import '../base/button/wl-button.js';
import '../base/button/wl-fab.js';
import '../icon/wl-icon.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import { showItemFormModal } from '../../modals.js';
import classNames from 'classnames';
import store from '../../store.js';

class WLUserList extends connect(store)(LitElement) {
  static get is() { return 'wl-user-list'; }

  static get properties() {
    return {
      _userList: { type: Object },
    };
  }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        wl-fab {
          bottom: 40px;
          font-size: 2.25rem;
          position: fixed;
          right: 40px;
          transition: transform .15s ease-in-out;
        }

        wl-fab.hide {
          transform: translateY(200px);
        }

        .container {
          background-color: var(--white);
          border-radius: .25rem;
          box-shadow: var(--shadow-2);
          margin-bottom: .5rem;
          overflow: hidden;
        }

        .user {
          align-items: center;
          border-bottom: 1px solid var(--gray-400);
          color: #222222;
          display: flex;
          line-height: 2rem;
          padding: .75rem;
          text-decoration: none;
          transition: all .25s;
        }

        .user:focus,
        .user:hover {
          background-color: var(--gray-200);
          outline: none;
        }

        .user.active {
          border-bottom-color: transparent;
        }

        .active {
          background-color: var(--primary-color--lighter);
        }

        .active:focus,
        .active:hover {
          background-color: var(--primary-color--lighter);
          outline: none;
        }

        .search {
          display: flex;
          padding: .5rem;
        }

        .search input {
          border-bottom: 1px solid #aaaaaa;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          border-top: 1px solid transparent;
          line-height: 1.75rem;
          font-size: 1rem;
          outline: none;
          width: 100%;
          padding-left: .25rem;
        }

        .search input:focus {
          border: 1px solid var(--primary-color);
          border-radius: 2px;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this.__allUsers = {};
    this.__currentUser = null;
    this.__selectedUser = null;

    this._userList = {};
  }

  render() {
    const userList = repeat(
      Object.entries(this._userList),
      ([k]) => k,
      ([k, v]) => {
        const classes = classNames('user', {
          active: k === this.__selectedUser,
        });

        return html`
          <a class="${classes}" href="/users/${k}">${v.name}</a>
        `;
      },
    );

    const isCurrentUserActive = this.__currentUser === this.__selectedUser;

    const currentUserClasses = classNames('user', { active: isCurrentUserActive });

    return html`
      ${WLUserList.styles}

      <div class="container">
        <a class="${currentUserClasses}" href="/users/${this.__currentUser}">Myself</a>
      </div>

      <div class="container" @keydown="${e => this.keyDownHandler(e)}">
        <div class="search" tabindex="-1" @focus="${() => this.renderRoot.getElementById('search').focus()}">
          <input id="search" placeholder="Search..." type="text" @keyup="${e => this.searchHandler(e)}">
        </div>

        ${userList}
      </div>

      <wl-fab
        class="${isCurrentUserActive ? '' : 'hide'}"
        @click="${() => this.buttonHandler()}"
      >
        <wl-icon icon="add"></wl-icon>
      </wl-fab>
    `;
  }

  _stateChanged(state = {}) {
    this.__currentUser = state.currentUser.id;
    this.__selectedUser = state.selectedUser.id;

    this.__allUsers = state.userList;

    // Don't show the current user in the user list
    delete this.__allUsers[this.__currentUser];

    const searchEl = this.renderRoot.getElementById('search');

    if (searchEl) {
      this._filterUsers(searchEl.value);
    }
  }

  _filterUsers(term) {
    const hits = [];

    Object.entries(this.__allUsers).forEach(([k, { name }]) => {
      const lowerCaseName = name.toLowerCase();

      if (lowerCaseName.indexOf(term) > -1) {
        hits.push(k);
      }
    });

    this._userList = hits.reduce((list, hit) => {
      list[hit] = this.__allUsers[hit];

      return list;
    }, {});
  }

  buttonHandler() {
    showItemFormModal();
  }

  keyDownHandler(e) {
    switch (e.keyCode) {
      case 38: // Up arrow
        if (!e.target.previousElementSibling) return;

        e.target.previousElementSibling.focus();

        break;
      case 40: // Down arrow
        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.focus();
        } else if (e.target.id === 'search') {
          e.target.parentElement.nextElementSibling.focus();
        }

        break;

      default:
    }
  }

  searchHandler(e) {
    this._filterUsers(e.target.value);
  }
}

customElements.define(WLUserList.is, WLUserList);

export default WLUserList;

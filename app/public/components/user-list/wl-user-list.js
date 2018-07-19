import { connect } from 'pwa-helpers/connect-mixin.js';
import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import classNames from 'classnames';
import store from '../../store.js';

class WLUserList extends connect(store)(LitElement) {
  static get is() { return 'wl-user-list'; }

  static get properties() {
    return {
      _userList: Object,
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

        .container {
          border-radius: 4px;
          border: 1px solid #dddddd;
        }

        .user {
          align-items: center;
          color: #222222;
          display: flex;
          line-height: 2rem;
          padding: .5rem;
          text-decoration: none;
        }

        .user:focus,
        .user:hover {
          background-color: #dddddd;
          outline: none;
        }

        .active {
          background-color: #b2dfdb;
        }

        .active:focus,
        .active:hover {
          background-color: #b2dfdb;
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
          font-size: 14px;
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
    this.__selectedUser = null;
    this._userList = {};
  }

  _render({ _userList }) {
    const userList = repeat(
      Object.entries(_userList),
      ([k]) => k,
      ([k, v]) => {
        const classes = classNames('user', {
          active: k === this.__selectedUser,
        });

        return html`
          <a class$="${classes}" href="/users/${k}">${v.name}</a>
        `;
      },
    );

    return html`
      ${WLUserList.styles}

      <div class="container" on-keydown=${e => this.keyDownHandler(e)}>
        <div class="search" tabindex="-1" on-focus=${() => this._root.getElementById('search').focus()}>
          <input id="search" placeholder="Search..." type="text" on-keyup=${e => this.searchHandler(e)}>
        </div>

        ${userList}
      </div>
    `;
  }

  _stateChanged(state = {}) {
    this.__allUsers = state.userList;
    this.__selectedUser = state.selectedUser.id;

    if (this._root) {
      const searchEl = this._root.getElementById('search');

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

  keyDownHandler(e) {
    switch (e.keyCode) {
      case 38: // Up arrow
        if (!e.target.previousElementSibling) return;

        e.target.previousElementSibling.focus();

        break;
      case 40: // Down arrow
        if (!e.target.nextElementSibling) break;

        e.target.nextElementSibling.focus();

        break;

      default:
    }
  }

  searchHandler(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case 40: // Down arrow
        // Focus the first user
        this._root.querySelector('a').focus();

        break;

      default:
        this._filterUsers(e.target.value);
    }
  }
}

customElements.define(WLUserList.is, WLUserList);

export default WLUserList;

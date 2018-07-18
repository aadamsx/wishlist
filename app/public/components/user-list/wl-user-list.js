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
        :host {
          display: flex;
          flex-direction: column;
        }

        .container {
          border-radius: 4px;
          border: 1px solid #dddddd;
        }

        .container:empty {
          border-color: transparent;
        }

        .user {
          align-items: center;
          color: #222222;
          display: flex;
          line-height: 2rem;
          padding: .5rem;
          text-decoration: none;
        }

        .user:hover {
          background-color: #dddddd;
        }

        .active {
          background-color: #b2dfdb;
        }

        .active:hover {
          background-color: #b2dfdb;
        }

        .search {
          /* border-bottom: 1px solid #dddddd; */
          display: flex;
          padding: .5rem;
        }

        .search input {
          border: 1px solid #aaaaaa;
          border-radius: 2px;
          line-height: 1.5rem;
          font-size: 14px;
          width: 100%;
          padding-left: .25rem;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this._userList = {};
  }

  _render({ _userList }) {
    const userList = repeat(
      Object.entries(_userList),
      ([k]) => k,
      ([k, v]) => {
        const classes = classNames('user', {
          active: k === 'QuDhG60jrsUbBDOj3Vuo',
        });

        return html`
          <a class$="${classes}" href="/users/${k}">${v.name}</a>
        `;
      },
    );

    return html`
      ${WLUserList.styles}

      <div class="container">
        <div class="search">
          <input id="search" placeholder="Search..." type="text" on-keyup=${e => this.handleSearch(e)}>
        </div>

        ${userList}
      </div>
    `;
  }

  _stateChanged(state = {}) {
    this.__allUsers = state.userList;

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

  handleSearch(e) {
    e.preventDefault();

    this._filterUsers(e.target.value);
  }
}

customElements.define(WLUserList.is, WLUserList);

export default WLUserList;

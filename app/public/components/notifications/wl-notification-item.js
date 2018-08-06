import { html, LitElement } from '@polymer/lit-element';
import { removeNotification } from '../../actions/notifications.js';
import classNames from 'classnames';
import store from '../../store.js';

class WLNotificationItem extends LitElement {
  static get is() { return 'wl-notification-item'; }

  static get properties() {
    return {
      isError: Boolean,
      key: String,
      text: String,
    };
  }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        div {
          align-items: center;
          background-color: #e0e0e0;
          border-radius: 4px;
          display: flex;
          height: 48px;
          justify-content: space-between;
          margin-top: 1rem;
          opacity: 0;
          padding: .5rem;
          transform: translateY(100px);
          width: 400px;
        }

        .active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity .2s cubic-bezier(.55, .08, .9, .55),
                      transform .2s ease-out;
        }

        .removing {
          transition: opacity .2s cubic-bezier(.13, .77, .42, .94),
                      transform .2s ease-in;
        }

        button {
          background-color: transparent;
          border-radius: 1rem;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          height: 2rem;
          line-height: 2rem;
          outline: none;
          transition: background-color .15s ease-in-out;
          width: 2rem;
        }

        button:focus,
        button:hover {
          background-color: #bdbdbd;
        }

        button:active {
          background-color: #9e9e9e;
        }

        .error {
          background-color: #ffcdd2;
        }

        .error button:focus,
        .error button:hover {
          background-color: #ef9a9a;
        }

        .error button:active {
          background-color: #e57373;
        }
      </style>
    `;
  }

  _render({ isError, text }) {
    const classes = classNames({
      error: isError,
    });

    return html`
      ${WLNotificationItem.styles}

      <div class$="${classes}">
        ${text}

        <button on-click="${e => this.removeHandler(e)}">&times;</button>
      </div>
    `;
  }

  _firstRendered() {
    setTimeout(() => {
      this._root.querySelector('div').classList.add('active');
    }, 0);

    setTimeout(() => this.removeSelf(), 3500);
  }

  removeHandler(e) {
    e.preventDefault();

    this.removeSelf();
  }

  removeSelf() {
    this._root.querySelector('div').classList.remove('active');
    this._root.querySelector('div').classList.add('removing');

    setTimeout(() => {
      store.dispatch(removeNotification(this.key));
    }, 200);
  }
}

customElements.define(WLNotificationItem.is, WLNotificationItem);

export default WLNotificationItem;

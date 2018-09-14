import { html, LitElement } from '@polymer/lit-element';
import { removeNotification } from '../../actions/notifications.js';
import classNames from 'classnames';
import store from '../../store.js';

class WLNotificationItem extends LitElement {
  static get is() { return 'wl-notification-item'; }

  static get properties() {
    return {
      isError: { type: Boolean },
      key: { type: String },
      text: { type: String },
    };
  }

  static get styles() {
    return html`
      <style>
        * {
          box-sizing: border-box;
        }

        @keyframes enter {
          0% {
            opacity: 0;
            transform: translateY(200px);
          }

          70% {
            opacity: .4;
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes exit {
          0% {
            opacity: 1;
            transform: translateY(0);
          }

          30% {
            opacity: .4;
          }

          100% {
            opacity: 0;
            transform: translateY(200px);
          }
        }

        div {
          align-items: center;
          background-color: var(--gray-200);
          border-radius: 4px;
          display: flex;
          height: 48px;
          justify-content: space-between;
          margin-top: 1rem;
          padding: .5rem;
          width: 400px;
        }

        .enter {
          animation: enter .2s forwards;
        }

        .exit {
          animation: exit .2s forwards;
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
          background-color: var(--gray-300);
        }

        button:active {
          background-color: var(--gray-400);
        }

        .error {
          background-color: var(--danger-color);
          color: var(--white);
        }

        .error button {
          color: var(--white);
        }

        .error button:focus,
        .error button:hover {
          background-color: var(--danger-color--light);
        }

        .error button:active {
          background-color: var(--danger-color--lighter);
        }
      </style>
    `;
  }

  render() {
    const classes = classNames('enter', {
      error: this.isError,
    });

    return html`
      ${WLNotificationItem.styles}

      <div class="${classes}">
        ${this.text}

        <button @click="${e => this.removeHandler(e)}">
          <wl-icon icon="close"></wl-icon>
        </button>
      </div>
    `;
  }

  firstUpdated() {
    setTimeout(() => this.removeSelf(), 3500);
  }

  removeHandler(e) {
    e.preventDefault();

    this.removeSelf();
  }

  removeSelf() {
    const notification = this.renderRoot.querySelector('div');

    const eventListener = () => {
      notification.removeEventListener('transitionend', eventListener);

      store.dispatch(removeNotification(this.key));
    };

    notification.addEventListener('transitionend', eventListener);

    notification.classList.remove('enter');
    notification.classList.add('exit');
  }
}

customElements.define(WLNotificationItem.is, WLNotificationItem);

export default WLNotificationItem;

import { html } from '@polymer/lit-element';

export default html`
  <style>
    button {
      border-radius: 4px;
      border: 1px solid #dddddd;
      height: 1.75rem;
      line-height: 1.75rem;
      padding: 0 1rem;
      background-color: var(--button__background-color, #dddddd);
    }

    button:focus,
    button:hover {
      background-color: var(--button__background-color--hover, #aaaaaa);
      cursor: pointer;
      outline: none;
    }

    button:active {
      background-color: var(--button__background-color--active, #888888);
    }
  </style>
`;

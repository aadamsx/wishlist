import { html } from '@polymer/lit-element';
import buttonStyles from './buttonStyles.js';

export default html`
  ${buttonStyles}

  <style>
    input,
    select {
      border-radius: 4px;
      border: 1px solid #dddddd;
      font-size: 1rem;
      height: 1.75rem;
      line-height: 1.75rem;
    }

    input {
      padding-left: .25rem;
    }
  </style>
`;

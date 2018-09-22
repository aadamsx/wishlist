import { html } from '@polymer/lit-element';

export default html`
  <style>
    form {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 5fr;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }

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

    label {
      align-self: center;
      justify-self: end;
    }

    .actions {
      grid-column-start: 2;
      justify-self: end;
    }

    .required::after {
      color: #d30505;
      content: '*';
      margin-left: 2px;
    }
  </style>
`;

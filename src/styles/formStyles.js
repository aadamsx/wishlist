import { html } from '@polymer/lit-element';

export default html`
  <style>
    form {
      display: grid;
      grid-template-columns: 1fr;
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
      margin-bottom: .75rem;
    }

    input {
      padding-left: .25rem;
    }

    label {
      align-self: center;
    }

    .actions {
      display: flex;
      justify-content: space-between;
    }

    .required::after {
      color: #d30505;
      content: '*';
      margin-left: 2px;
    }

    @media screen and (min-width: 768px) {
      form {
        gap: 1rem;
        grid-template-columns: 1fr 5fr;
      }

      label {
        justify-self: end;
      }

      input,
      select {
        margin-bottom: 0;
      }

      .actions {
        display: block;
        grid-column-start: 2;
        justify-self: end;
      }
    }
  </style>
`;

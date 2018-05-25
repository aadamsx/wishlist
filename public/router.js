import './components/page/wl-user-list-page';
import './components/page/wl-user-page';
import { html } from '@polymer/lit-element';
import { render } from 'lit-html';
import page from 'page';

const page404 = html`
  <div>You are on an unknown page</div>
  <p>haha</p>
`;

const root = document.getElementById('root');

page('/', () => {
  render(html`<wl-user-list-page></wl-user-list-page>`, root);
});

page('/users/:userId', (ctx) => {
  render(html`<wl-user-page userId=${ctx.params.userId}></wl-user-page>`, root);
});

page('*', () => {
  render(page404, root);
});

export default page;

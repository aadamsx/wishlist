import { configure } from '@storybook/html';
import { addDecorator } from '@storybook/html/dist/client/preview';
import litDecorator from './litDecorator';

const loadStories = () => {
  // Automatically import all files ending in *.stories.js
  const req = require.context('../stories', true, /.stories.js$/);

  req.keys().forEach(filename => req(filename));
}

addDecorator(litDecorator);
configure(loadStories, module);

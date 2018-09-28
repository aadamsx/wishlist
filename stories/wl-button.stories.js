import '../src/components/base/button/wl-button.js';
import { storiesOf } from '@storybook/html';

storiesOf('<wl-button>', module)
  .add('Default', () => '<wl-button>Test</wl-button>')
  .add('Primary', () => '<wl-button primary>Test</wl-button>')
  .add('Secondary', () => '<wl-button secondary>Test</wl-button>');

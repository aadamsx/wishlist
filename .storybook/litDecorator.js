import { render, TemplateResult } from 'lit-html';

const litDecorator = (story) => {
  const baseEl = document.createElement('div');
  const component = story();

  if (component instanceof TemplateResult) {
    render(component, baseEl);

    return baseEl;
  }

  return component;
};

export default litDecorator;

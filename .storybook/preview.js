import { addDecorator } from '@storybook/react';
import { Global, css } from '@emotion/core';

import common from '../src/styles/common';

addDecorator((story) => (
  <>
    <Global styles={common} />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

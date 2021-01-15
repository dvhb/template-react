import React from 'react';
import { select } from '@storybook/addon-knobs';

import { DvhbUiProvider, GlobalStyle, ThemeProvider, themes } from '../theme';

export const withThemeProvider = (story: any) => (
  <DvhbUiProvider>
    <ThemeProvider
      // @ts-ignore
      theme={select(
        'theme',
        // @ts-ignore
        themes,
        themes.theme1,
      )}
    >
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </DvhbUiProvider>
);

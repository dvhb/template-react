import { createTheming, ThemingType } from '@callstack/react-theme-provider';
import { createGlobalStyle } from 'styled-components';

import { Theme } from './types';
import { prototype } from './prototype';
import { theme1 } from './theme1';

export * from './DvhbUiProvider';
export * from './types';

export const themes: { [key: string]: Theme } = {
  prototype,
  theme1,
};

export const { ThemeProvider, useTheme }: ThemingType<Theme> = createTheming(themes.theme1);

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
`;

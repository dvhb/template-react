import { createTheming, ThemingType } from '@callstack/react-theme-provider';

export type Theme = {
  primaryColor: string;
  secondaryColor: string;
};

export const themes: { [key: string]: Theme } = {
  default: {
    primaryColor: 'red',
    secondaryColor: 'green',
  },
};

export const { ThemeProvider, withTheme }: ThemingType<Theme> = createTheming(themes.default);

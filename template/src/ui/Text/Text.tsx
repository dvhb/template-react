import React, { FC } from 'react';
import { TextProps as UITextProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { StyledText } from './styled';

export type TextProps = {
  theme?: Theme;
  breakWord?: boolean;
  color?: 'primaryColor' | 'secondaryColor' | 'errorColor' | 'grey' | 'inherit';
} & UITextProps;

export const Text: FC<TextProps> = ({ color, ...rest }) => {
  const theme = useTheme();
  return <StyledText color={color} theme={theme} {...rest} />;
};

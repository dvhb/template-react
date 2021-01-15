import React from 'react';
import { InputProps as UIInputProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { StyledInput } from './styled';

export type InputProps = { theme?: Theme } & UIInputProps;

export const Input = ({ ...rest }: InputProps) => {
  const theme = useTheme();
  return <StyledInput theme={theme} {...rest} />;
};

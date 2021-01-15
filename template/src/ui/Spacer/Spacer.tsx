import React from 'react';
import styled from 'styled-components';
import { Spacer as UISpacer, SpacerProps as UISpacerProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';

export type SpacerProps = { theme?: Theme } & UISpacerProps;

const SpacerStyled = styled(UISpacer)<SpacerProps>``;

const config = {
  xxs: 4,
  xs: 8,
  sm: 12,
  default: 16,
  lg: 20,
  xlg: 24,
  none: 0,
};

export const Spacer = ({ ...rest }: SpacerProps) => {
  const theme = useTheme();
  return <SpacerStyled config={config} theme={theme} {...rest} />;
};

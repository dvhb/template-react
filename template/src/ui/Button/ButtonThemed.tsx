import React from 'react';
import styled from 'styled-components';

import { Button as DefaultButton } from './Button';
import { withTheme, Theme } from '../../theme';

type Props = { theme: Theme };

const ButtonStyled = styled(DefaultButton)<Props>`
  background-color: ${(p: Props) => p.theme.primaryColor};
`;

export const Button = withTheme(ButtonStyled);

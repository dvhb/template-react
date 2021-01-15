import styled from 'styled-components';

import { Button } from '../Button';
import { xs } from '../../theme/variables';
import { Theme } from '../../theme';
import { Text } from '../Text';
import React from 'react';

export const StyledModalContent = styled.div`
  border-radius: 12px;
  padding: 28px 40px;

  @media ${xs} {
    padding: 20px;
    border-radius: 0px;
    margin: -30px;
  }
`;

export const StyledCloseButton = styled(Button)<Theme>`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 24px;
  display: flex;
  z-index: 10;
`;

export const StyledCloseButtonText = styled((props) => (
  <Text tag="div" size="inherit" textColor="grey" {...props} />
))<Theme>`
  display: flex;
`;

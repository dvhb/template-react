import styled, { css } from 'styled-components';

import { Text, TextProps } from '../Text';
import { FieldProps } from './Field';
import { Theme } from '../../theme';

export const StyledTextHelper = styled(Text)<TextProps & Pick<FieldProps, 'error' | 'descriptionLeftPadding'> & Theme>`
  && {
    max-width: 550px;

    ${(p) =>
      p.error &&
      css`
        color: ${(p) => p.theme.errorColor};
      `}
    ${(p) =>
      p.descriptionLeftPadding &&
      css`
        padding-left: 32px;
      `}
  }
`;

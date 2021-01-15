import styled, { css } from 'styled-components';
import { CheckboxControl } from '@dvhb/ui';

import { CheckboxProps } from './Checkbox';

export const StyledCheckboxControl = styled(CheckboxControl)<CheckboxProps>`
  border-width: ${p => p.theme?.checkbox?.borderWidth}px;
  border-radius: ${p => p.theme?.checkbox?.borderRadius}px;
  border-color: ${p => p.theme?.checkbox?.borderColor};
  ${p =>
    p.checked &&
    css`
      border-color: ${p => p.theme?.checkbox?.borderColorChecked || p.theme?.primaryColor};
      background-color: ${p => p.theme?.checkbox?.backgroundColorChecked || p.theme?.primaryColor};
    `}
`;

export const StyledLabel = styled.div`
  padding-top: 2px;
`;

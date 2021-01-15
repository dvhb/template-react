import styled, { css } from 'styled-components';

import { Input } from '@dvhb/ui';
import { InputProps } from './Input';

export const StyledInput = styled(Input)<InputProps>`
  height: ${p => p.theme?.input?.height};
  background-color: ${p => p.theme?.input?.backgroundColor};
  border-color: ${p => p.theme?.input?.borderColor};
  font-size: ${p => p.theme?.input?.fontSize};
  border-radius: ${p => p.theme?.input?.borderRadius};
  font-family: ${p => p.theme?.fontFamily};

  &:focus {
    border-color: ${p => p.theme?.primaryColor};
  }

  ${p =>
    p.required &&
    css`
      && {
        border-color: ${p => p.theme?.errorColor};
      }
    `}
`;

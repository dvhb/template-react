import { ButtonGroupButtonProps } from '@dvhb/ui';
import styled, { css } from 'styled-components';

import { Theme } from '../../theme';

export const StyledContainer = styled.div<{ asButton?: boolean } & Theme>`
  && {
    box-shadow: 0px 8px 20px rgba(21, 23, 27, 0.2);
    border: none;
    border-radius: ${(p) => p.theme?.button?.borderRadius || '24px'};

    ${(p) =>
      p.asButton &&
      css`
        flex-wrap: wrap;
        box-shadow: none;
        border-radius: 0;
        margin-right: -8px;
        overflow: visible;
        width: auto;
        min-width: 100%;
      `}
  }
`;

export const StyledButton = styled.div<ButtonGroupButtonProps & Theme & { asButton?: boolean }>`
  && {
    height: 48px;
    background-color: #fff;
    color: ${(p) => p.theme?.secondaryColor};

    & + & {
      border-left-color: #f0f2f7;
    }

    ${(p) =>
      p.asButton &&
      css`
        border: 1px solid ${(p) => p.theme?.input?.borderColor || '#B2B6BE'};
        border-radius: ${(p) => p.theme?.input?.borderRadius};
        flex: 1 1 45%;
        max-width: calc(50% - 8px);
        margin: 0 8px 8px 0px;

        & + & {
          border-left-color: ${(p) => p.theme?.input?.borderColor || '#B2B6BE'};
        }
      `}

    ${(p) =>
      p.active &&
      css`
        background-color: ${(p) => p.theme?.secondaryColor};
        color: #fff;
        border-color: ${(p) => p.theme?.secondaryColor};
      `}
  }
`;

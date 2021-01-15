import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Button as UIButton, ButtonProps as UIButtonProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { xs } from '../../theme/variables';

export type ButtonProps = {
  theme?: Theme;
  type?: 'unstyled' | 'asLink' | 'secondary' | 'outline';
} & UIButtonProps;

const ButtonStyled = styled(({ ...rest }) => <UIButton {...rest} />)<ButtonProps>`
  outline: none;

  ${(p: ButtonProps) =>
    p.type !== 'unstyled' &&
    p.type !== 'asLink' &&
    css`
      background-color: ${p => p.theme?.button?.backgroundColor || p.theme?.primaryColor};
      color: ${p => p.theme?.button?.color};
      font-size: ${p => p.theme?.button?.fontSize};
      font-weight: ${p => p.theme?.button?.fontWeight};
      border-radius: ${p => p.theme?.button?.borderRadius};
      box-shadow: ${p => p.theme?.button?.boxShadow};
      height: ${p => p.theme?.button?.height};
      min-width: ${p => p.theme?.button?.minWidth};
      text-transform: uppercase;
      transition: opacity 0.6s ease;

      &:hover {
        background-color: ${p => p.theme?.button?.onHoverBackgroundColor || p.theme?.button?.backgroundColor};
        opacity: 0.8;
      }

      @media ${xs} {
        min-width: 0;
        width: 100%;
      }
    `}

  ${p =>
    p.type === 'asLink' &&
    css`
      && {
        background-color: transparent;
        color: ${p => p.theme?.primaryColor};
        font-size: 10px;
        font-weight: ${p => p.theme?.button?.fontWeight};
        border-radius: 0;
        box-shadow: none;
        height: auto;
        min-width: auto;
        text-transform: uppercase;
        padding: 0;
        line-height: 16px;
        transition: opacity 0.6s ease;

        &:hover {
          background-color: transparent;
          color: ${p => p.theme?.primaryColor};
          opacity: 0.7;
        }
      }
    `}
  
  ${p =>
    p.type === 'secondary' &&
    css`
      background-color: ${p => p.theme?.button?.secondary?.backgroundColor};
      color: ${p => p.theme?.button?.secondary?.color};
    `}
    
  ${p =>
    p.type === 'outline' &&
    css`
      background-color: ${p => p.theme?.button?.outline?.backgroundColor};
      color: ${p => p.theme?.button?.outline?.color};
      border-color: ${p => p.theme?.button?.outline?.borderColor};
      border-width: ${p => p.theme?.button?.outline?.borderWidth};
      box-shadow: none;
      border: solid;
    `}
    
  ${p =>
    p.block &&
    css`
      min-width: 0;
    `}  
`;

export const Button: FC<ButtonProps> = ({ ...rest }) => {
  const theme = useTheme();
  return <ButtonStyled theme={theme} {...rest} />;
};

import styled, { css } from 'styled-components';

import { Text, TextProps } from '../Text';
import { Theme } from '../../theme';

export const StyledControl = styled('div')<Theme & any>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;

  border-color: ${p =>
    (p.selectProps.error ? p.theme?.input?.borderColorError : p.theme?.input?.borderColor) || '#B2B6BE'};
  border-radius: ${p => p.theme?.input?.borderRadius || '4px'};
  min-height: ${p => p.theme?.input?.height || '40px'};
  background-color: ${p => p.theme?.input?.backgroundColor};
  font-family: ${p => p.theme?.fontFamily};
  font-size: ${p => p.theme?.input?.fontSize};

  ${p =>
    p.menuIsOpen &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  ${p =>
    p.size === 'sm' &&
    css`
      min-height: 28px;
      font-size: 14px;
    `}
`;

export const StyledDropdownIndicator = styled('div')<Theme>`
  color: ${p => p.theme?.primaryColor};
  transform: rotate(90deg);
  margin-right: 8px;
  pointer-events: none;
`;

export const StyledMultiValueContainer = styled('div')<Theme>`
  background: #3b3e45;
  border-radius: 4px;
  display: flex;
  margin-right: 6px;
  margin-bottom: 3px;
  margin-top: 3px;
`;

export const StyledMultiValueLabel = styled('div')<Theme>`
  font-size: ${p => p.theme?.input?.fontSize};
  color: #fff;
  line-height: 36px;
  padding: 0 4px 0 10px;
`;

export const StyledMultiValueRemove = styled('div')<Theme>`
  color: ${p => p.theme?.secondaryColor};
  align-items: center;
  display: flex;
  padding-right: 4px;
  cursor: pointer;

  &&:hover {
    color: ${p => p.theme?.secondaryColor};
    opacity: 0.8;
    background-color: transparent;
  }
`;

export const StyledOption = styled('div')<Theme>`
  color: ${p => p.theme?.primaryColor};
  font-size: ${p => p.theme?.input?.fontSize};
  padding: 8px 12px;
  cursor: pointer;
`;

export const StyledMenu = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
`;

export const StyledSelectContainer = styled.div<any>`
  ${p =>
    p.selectProps.menuIsOpen &&
    css`
      transform: translate3d(0, 0, 0);
      filter: drop-shadow(0px 4px 10px rgba(21, 23, 27, 0.1));
      position: relative;
      z-index: 10;
    `}
`;

export const StyledOptionDescription = styled(Text).attrs({ tag: 'div' })<TextProps>`
  display: inline;
`;

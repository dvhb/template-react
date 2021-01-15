import styled from 'styled-components';

import { Text, TextProps } from '../../Text';
import { Theme } from '../../../theme';

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: auto;
`;

export const StyledControl = styled('div')<Theme & any>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  margin: 0 20px;
  flex: none;

  border-color: ${(p) =>
    (p.selectProps.error ? p.theme?.input?.borderColorError : p.theme?.input?.borderColor) || '#B2B6BE'};
  border-radius: ${(p) => p.theme?.input?.borderRadius || '4px'};
  min-height: ${(p) => p.theme?.input?.height || '40px'};
  background-color: ${(p) => p.theme?.input?.backgroundColor};
  font-family: ${(p) => p.theme?.fontFamily};
  font-size: ${(p) => p.theme?.input?.fontSize};
`;

export const StyledOption = styled('div')<Theme>`
  color: ${(p) => p.theme?.primaryColor};
  font-size: ${(p) => p.theme?.input?.fontSize};
  padding: 12px 20px;
  cursor: pointer;
  line-height: 24px;
`;

export const StyledMenu = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  border-top: 1px solid #e3e6ec;
  margin-top: 16px;
  flex: auto;
  overflow: auto;

  & > div {
    max-height: none;
  }
`;

export const StyledMenuList = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const StyledOptionDescription = styled(Text).attrs({ tag: 'div' })<TextProps>`
  display: inline;
`;

export const StyledModalContent = styled.div`
  pointer-events: auto;
  padding: 0;
  max-width: none;
  width: 100%;
  box-sizing: border-box;
  flex: auto;
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: auto;
`;

export const StyledTextContainer = styled(Text).attrs({ tag: 'div' })`
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: auto;
`;

export const StyledLabel = styled.div`
  padding: 20px 40px 0 20px;
  min-height: 24px;
  flex: none;
`;

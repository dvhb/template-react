import styled from 'styled-components';

import { Theme } from '../../theme';
import { Hint } from '@dvhb/ui';

export const StyledIcon = styled.div<Theme>`
  color: ${(p) => p.theme.secondaryColor};
  display: flex;
  font-size: 16px;
`;

export const StyledHint = styled(Hint)`
  font-size: 12px;
  line-height: 16px;

  p {
    margin: 0 0 8px 0;
    font: 12px/16px 'open sans', sans-serif;
  }
`;

export const StyledPopup = styled.div`
  position: fixed;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  overflow: auto;
  transform: none;
  z-index: 10;
  background-color: #fff;
  display: block;
`;

export const StyledPopupContent = styled.div`
  border-radius: 0;
  border: none;
  padding: 20px 40px 20px 20px;
  box-shadow: none;
`;

export const StyledClose = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  color: ${(p) => p.theme.secondaryColor};
`;

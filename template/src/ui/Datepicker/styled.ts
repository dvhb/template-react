import styled, { css } from 'styled-components';
import { Datepicker as UIDatepicker } from '@dvhb/ui';

import { DatepickerProps } from './Datepicker';
import { sm, xs } from '../../theme/variables';

export const StyledCustomOverlay = styled.div`
  border: none;
  border-radius: 0 0 8px 8px;

  @media ${xs} {
    min-width: 100%;
    text-align: center;
  }
  @media ${sm} {
    min-width: 100%;
    text-align: center;
  }
`;

export const StyledCustomOverlayWrapper = styled.div`
  // transform: translate3d(0, 0, 0);
  z-index: 50;
`;

export const StyledMobileDropdownHolder = styled.div`
  @media ${xs} {
    height: 220px;
  }
`;

export const StyledDatepicker = styled(UIDatepicker)<DatepickerProps>``;

type StyledArrowProps = {
  withSelectInHeader?: boolean;
};

export const StyledArrow = styled.div<StyledArrowProps>`
  color: ${(p) => p.theme.primaryColor};

  ${(p) =>
    p.withSelectInHeader &&
    css`
      top: 20px;
    `}
`;

type StyledPickerWrapperProps = {
  pickerIsFocused?: boolean;
};

export const StyledPickerWrapper = styled.div<StyledPickerWrapperProps>`
  ${(p) =>
    p.pickerIsFocused &&
    css`
      filter: drop-shadow(0px 4px 10px rgba(21, 23, 27, 0.1));
      position: relative;
      z-index: 5;
    `}
`;

export const StyledCalendarCaption = styled.div`
  display: table-caption;
  margin-bottom: 16px;
  text-align: center;
`;

export const StyledCalendarCaptionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCaptionSelect = styled.div`
  max-width: 100px;
  flex: auto;

  & + & {
    margin-left: 12px;
  }
`;

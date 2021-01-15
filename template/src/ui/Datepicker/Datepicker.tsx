import React, { useCallback, useState } from 'react';
import { DatepickerProps as UIDatepickerProps } from '@dvhb/ui';

// import used locales
import 'moment/locale/ru';

import { Theme, useTheme } from '../../theme';
import { useWindowSize } from '../../utils';
import { InputWithIcon } from '../Input';
import {
  StyledArrow,
  StyledCustomOverlay,
  StyledCustomOverlayWrapper,
  StyledDatepicker,
  StyledPickerWrapper,
  StyledMobileDropdownHolder,
} from './styled';

export type DatepickerProps = {
  theme?: Theme;
  withSelectInHeader?: boolean;
  dataCy?: string;
  maskChar?: string;
} & Omit<UIDatepickerProps, 'inputProps'> &
  Pick<Required<UIDatepickerProps>['inputProps'], 'mask' | 'required' | 'onFocus' | 'onBlur'>;

const CustomOverlay = ({ classNames, selectedDay, children, ...props }: any) => {
  return (
    <StyledCustomOverlayWrapper className={classNames.overlayWrapper} {...props}>
      <StyledCustomOverlay className={classNames.overlay}>{children}</StyledCustomOverlay>
    </StyledCustomOverlayWrapper>
  );
};

export const Datepicker = ({
  format,
  placeholder,
  mask,
  maskChar,
  withSelectInHeader,
  dayPickerProps = {},
  required,
  onFocus,
  onBlur,
  dataCy,
  ...rest
}: DatepickerProps) => {
  const theme = useTheme();

  const inputRef = React.useRef<HTMLInputElement>();
  const [pickerIsFocused, setPickerIsFocused] = useState(false);
  const { width } = useWindowSize();

  const handlePickerShow = useCallback(async () => {
    // close popover when picker menu is open
    document.body.click();
    const topPoint = inputRef.current && inputRef.current.getBoundingClientRect().top;

    await setPickerIsFocused(true);
    setTimeout(() => inputRef?.current?.focus?.(), 50);
    if (width && width < 768 && topPoint) {
      setTimeout(() => {
        window.scrollTo({
          top: topPoint,
          left: 0,
          behavior: 'smooth',
        });
      }, 150);
    }
  }, [setPickerIsFocused, inputRef, width]);
  const handlePickerHide = useCallback(() => {
    // Without setTimeout it sets focus back to input and breaks navigation with Tab key
    setTimeout(() => setPickerIsFocused(false), 50);
  }, []);

  const handleIconClick = useCallback(() => {
    !pickerIsFocused && handlePickerShow();
  }, [pickerIsFocused, handlePickerShow]);

  const CustomInputComponent = useCallback(
    (props: any) => (
      <InputWithIcon
        style={{
          borderBottomLeftRadius: pickerIsFocused ? 0 : null,
          borderBottomRightRadius: pickerIsFocused ? 0 : null,
        }}
        iconName="Calendar"
        onIconClick={handleIconClick}
        {...props}
      />
    ),
    [handleIconClick, pickerIsFocused],
  );

  return (
    <>
      <StyledPickerWrapper pickerIsFocused={pickerIsFocused}>
        <StyledDatepicker
          theme={theme}
          dayPickerProps={{ ...dayPickerProps, locale: theme.datepicker?.locale }}
          format={format || theme.datepicker?.format}
          placeholder={placeholder || theme.datepicker?.placeholder}
          inputComponent={CustomInputComponent}
          overlayComponent={CustomOverlay}
          inputProps={
            {
              onFocus,
              onBlur,
              mask,
              maskChar,
              required,
              dataCy,
              ref: inputRef,
              type: 'tel',
            } as any
          }
          onDayPickerShow={handlePickerShow}
          onDayPickerHide={handlePickerHide}
          components={{
            Arrow: (props: any) => <StyledArrow withSelectInHeader={withSelectInHeader} theme={theme} {...props} />,
          }}
          {...rest}
        />
      </StyledPickerWrapper>
      {pickerIsFocused && <StyledMobileDropdownHolder />}
    </>
  );
};

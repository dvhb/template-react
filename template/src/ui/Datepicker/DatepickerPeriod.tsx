import React, { useEffect, useState } from 'react';

import { Datepicker, DatepickerProps as UIDatepickerProps } from './Datepicker';
import { useTheme, Theme } from '../../theme';
import { useWindowSize } from '../../utils';
import styled from 'styled-components';

export type DatepickerPeriodProps = { theme?: Theme; className?: string } & UIDatepickerProps;

const DatepickerPeriodPure = ({
  format,
  placeholder,
  dayPickerProps,
  className = 'picker',
  ...rest
}: DatepickerPeriodProps) => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const [smallScreen, setSmallScreen] = useState(false);

  const pickerRangeClassFrom = `${className}__from`;
  const pickerRangeClassTo = `${className}__to`;
  const pickerRangeClassSelected = `${className}__selected`;

  useEffect(() => {
    if (width && width < 992) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [width]);

  return (
    <Datepicker
      modifiersClassNames={{
        range: {
          from: pickerRangeClassFrom,
          to: pickerRangeClassTo,
        },
        selected: pickerRangeClassSelected,
      }}
      period
      theme={theme}
      dayPickerProps={{ ...dayPickerProps, locale: theme.datepicker?.locale, numberOfMonths: smallScreen ? 1 : 2 }}
      format={format || theme.datepicker?.format}
      dataCy={rest.dataCy}
      placeholder={placeholder || theme.datepicker?.placeholderPeriod}
      {...rest}
    />
  );
};

export const DatepickerPeriod = styled(DatepickerPeriodPure)<DatepickerPeriodProps>`
  &__selected {
    background-color: #f5e6e8;
    border-radius: 0;
  }

  &__from,
  &__to {
    background-color: #e2b5ba;
    position: relative;
  }
`;

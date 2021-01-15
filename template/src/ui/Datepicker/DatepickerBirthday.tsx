import React, { useCallback, useState } from 'react';

import { Datepicker, DatepickerProps } from './Datepicker';

import { fromMonthDefault, toCurrentMonth, YearMonthForm } from './components/YearMonthForm';

type DatepickerBirthdayProps = {} & DatepickerProps;

export const DatepickerBirthday = ({ dayPickerProps, ...rest }: DatepickerBirthdayProps) => {
  const [month, setMonth] = useState(dayPickerProps?.toMonth ?? toCurrentMonth);
  const handleYearMonthChange = useCallback(m => setMonth(m), []);

  // @ts-ignore
  const CaptionElement = ({ date, localeUtils, locale }) => (
    <YearMonthForm
      date={date}
      localeUtils={localeUtils}
      locale={locale}
      onChange={handleYearMonthChange}
      toMonth={dayPickerProps?.toMonth}
      fromMonth={dayPickerProps?.fromMonth}
    />
  );

  return (
    <Datepicker
      withSelectInHeader
      dayPickerProps={Object.assign(
        {
          month,
          fromMonth: fromMonthDefault,
          toMonth: toCurrentMonth,
          captionElement: CaptionElement,
        },
        dayPickerProps,
      )}
      mask="99.99.9999"
      {...rest}
    />
  );
};

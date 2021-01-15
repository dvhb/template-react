import React, { useCallback } from 'react';
import { Select } from '../../Select';
import { StyledCalendarCaption, StyledCalendarCaptionContainer, StyledCaptionSelect } from '../styled';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export const fromMonthDefault = new Date(currentYear - 100, 1);
export const toCurrentMonth = new Date(currentYear, currentMonth);

export type YearMonthFormProps = {
  date: any;
  localeUtils: any;
  locale: string;
  fromMonth?: Date;
  toMonth?: Date;
  onChange: (date: Date) => void;
};

type OptionType = {
  label: string;
  value: string;
};

const prepareMonthOptions = (arr: number[]) =>
  arr.map((i, index) => ({ label: i.toString(), value: index.toString() }));
const prepareYearOptions = (arr: number[]) => arr.map((i) => ({ label: i.toString(), value: i.toString() }));

export const YearMonthForm = ({
  date,
  localeUtils,
  onChange,
  locale,
  toMonth = toCurrentMonth,
  fromMonth = fromMonthDefault,
}: YearMonthFormProps) => {
  const months = localeUtils.getMonths(locale);

  const years = [];
  for (let i = toMonth.getFullYear(); i >= fromMonth.getFullYear(); i -= 1) {
    years.push(i);
  }

  const monthOptions = prepareMonthOptions(months);

  const yearsOptions = prepareYearOptions(years);

  const handleMonthChange = useCallback(
    (selectedOption: OptionType) => {
      const selected = new Date(date.getFullYear(), Number(selectedOption.value));
      if (selected > toMonth) {
        onChange(new Date(date.getFullYear() - 1, Number(selectedOption.value)));
      } else if (selected < fromMonth) {
        onChange(new Date(date.getFullYear() + 1, Number(selectedOption.value)));
      } else {
        onChange(selected);
      }
    },
    [date, onChange, fromMonth, toMonth],
  );

  const handleYearChange = useCallback(
    (selectedOption: OptionType) => {
      const newYear = Number(selectedOption.value);
      if (new Date(newYear, date.getMonth()) > toMonth) {
        onChange(new Date(newYear, toMonth.getMonth()));
      } else if (new Date(newYear, date.getMonth()) < fromMonth) {
        onChange(new Date(newYear, fromMonth.getMonth()));
      } else {
        onChange(new Date(newYear, date.getMonth()));
      }
    },
    [date, onChange, fromMonth, toMonth],
  );

  return (
    <StyledCalendarCaption>
      <StyledCalendarCaptionContainer>
        <StyledCaptionSelect>
          {/*
            // TODO: react-select onChange type problems
            // @ts-ignore */}
          <Select
            size="sm"
            value={monthOptions.filter((i: OptionType) => Number(i.value) === date.getMonth())[0]}
            options={monthOptions}
            {...{
              onChange: handleMonthChange,
            }}
          />
        </StyledCaptionSelect>
        <StyledCaptionSelect>
          {/*
            // TODO: react-select onChange type problems
            // @ts-ignore */}
          <Select
            size="sm"
            value={yearsOptions.filter((i: OptionType) => Number(i.value) === date.getFullYear())[0]}
            options={yearsOptions}
            {...{
              onChange: handleYearChange,
            }}
          />
        </StyledCaptionSelect>
      </StyledCalendarCaptionContainer>
    </StyledCalendarCaption>
  );
};

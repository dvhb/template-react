import React from 'react';
import { Field } from 'react-final-form';

import { Datepicker } from './Datepicker';
import { DatepickerPeriod } from './DatepickerPeriod';
import { DatepickerBirthday } from './DatepickerBirthday';
import { FormDemo } from '../utils/forms';

export default {
  title: 'UI/Datepicker',
};

export const Default = () => <Datepicker />;

export const Birthday = () => <DatepickerBirthday />;

export const Period = () => <DatepickerPeriod />;

export const WithForm = () => (
  <FormDemo
    initialValues={{
      datepicker: '2020-02-20',
      datepickerBirthday: '2020-02-20',
      datepickerPeriod: '2020-03-20/2020-03-29',
    }}
  >
    <Field name="datepicker">{({ input }) => <Datepicker value={input.value} onChange={input.onChange} />}</Field>
    <br />
    <Field name="datepickerBirthday">
      {({ input }) => <DatepickerBirthday value={input.value} onChange={input.onChange} />}
    </Field>
    <br />
    <Field name="datepickerPeriod">
      {({ input }) => <DatepickerPeriod value={input.value} onChange={input.onChange} />}
    </Field>
    <br />
  </FormDemo>
);

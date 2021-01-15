import React from 'react';
import { action } from '@storybook/addon-actions';
import { Field } from 'react-final-form';

import { Checkbox } from './Checkbox';
import { Field as UIField } from '../Field';
import { FormDemo } from '../utils/forms';

export default {
  title: 'UI/Checkbox',
};

const props = {
  label: 'Checkbox',
  onChange: action('onChange'),
};

export const Off = () => <Checkbox {...props} />;
export const OffWithDisabled = () => <Checkbox {...props} disabled />;

export const On = () => <Checkbox {...props} checked />;
export const OnWithDisabled = () => <Checkbox {...props} checked disabled />;

export const Error = () => (
  <UIField errorText="Обязательное поле" error>
    <Checkbox {...props} />
  </UIField>
);
export const WithForm = () => (
  <FormDemo initialValues={{ checkbox: true }}>
    <Field name="checkbox">
      {({ input }) => <Checkbox label="Checkbox label" error checked={input.value} onChange={input.onChange} />}
    </Field>
  </FormDemo>
);

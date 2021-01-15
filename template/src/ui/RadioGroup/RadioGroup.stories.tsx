import React from 'react';
import { Field } from 'react-final-form';

import { RadioGroup } from './RadioGroup';
import { FormDemo } from '../utils/forms';

export default {
  title: 'UI/RadioGroup',
};

export const Default = () => (
  <RadioGroup name="radioGroup">
    <RadioGroup.Item label="radio 1" value="r1" />
    <RadioGroup.Item label="radio 2" value="r2" />
  </RadioGroup>
);

export const WithValue = () => (
  <RadioGroup name="radioGroup1" value="r1">
    <RadioGroup.Item label="radio 1" value="r1" />
    <RadioGroup.Item label="radio 2" value="r2" />
  </RadioGroup>
);

export const WithForm = () => (
  <FormDemo initialValues={{ radioGroup: 'r1' }}>
    <Field name="radioGroup">
      {({ input }) => (
        <RadioGroup name="radioGroup1" value={input.value} onChange={input.onChange}>
          <RadioGroup.Item label="radio 1" value="r1" />
          <RadioGroup.Item label="radio 2" value="r2" />
        </RadioGroup>
      )}
    </Field>
  </FormDemo>
);

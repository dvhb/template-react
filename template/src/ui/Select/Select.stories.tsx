import React from 'react';
import { Field } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';
import { mockOptionsGrouped, mockOptionsSimple } from './__mock__';
import { FormDemo } from '../utils/forms';

export default {
  title: 'UI/Select',
};

const props = {
  options: mockOptionsSimple,
  onChange: action('onChange'),
  loadOptions: () => undefined as any,
};

const value = mockOptionsSimple[0];

export const Default = () => <Select {...props} />;

export const WithValue = () => <Select {...props} value={value} />;

export const DisabledClearIndicator = () => <Select {...props} clearIndicator={false} isMulti />;

export const WithError = () => <Select {...props} error />;

export const WithGroupedOptions = () => <Select {...props} isMulti options={mockOptionsGrouped} />;

export const WithForm = () => (
  <FormDemo initialValues={{ selectDefault: value, selectMulti: value }}>
    <Field name="selectDefault">
      {({ input }) => <Select {...props} value={input.value} onChange={input.onChange} />}
    </Field>
    <br />
    <Field name="selectMulti">
      {({ input }) => (
        <Select {...props} isMulti options={mockOptionsGrouped} value={input.value} onChange={input.onChange} />
      )}
    </Field>
  </FormDemo>
);

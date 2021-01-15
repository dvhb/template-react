import React from 'react';
import { Field } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { FormDemo } from '../utils/forms';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'UI/ButtonGroup',
};

const props = {
  onChange: action('onChange'),
  items: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ],
};

const value = props.items[0].value;

export const Default = () => <ButtonGroup {...props} />;

export const Block = () => <ButtonGroup {...props} block />;

export const WithValue = () => <ButtonGroup {...props} value={value} />;

export const WithForm = () => (
  <FormDemo initialValues={{ radioGroup: value }}>
    <Field name="radioGroup">
      {({ input }) => <ButtonGroup {...props} value={input.value} onChange={input.onChange} />}
    </Field>
    <br />
  </FormDemo>
);

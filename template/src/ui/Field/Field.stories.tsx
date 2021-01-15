import React from 'react';

import { Field } from './Field';
import { Input } from '../Input';

export default {
  title: 'UI/Field',
};

export const Default = () => (
  <Field label="label" labelHint="Hint">
    <Input placeholder="placeholder" />
  </Field>
);

export const WithError = () => (
  <Field error errorText="Field with error" description="some description">
    <Input placeholder="placeholder" />
  </Field>
);

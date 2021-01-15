import React, { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { Button } from '../Button';

export const onSubmit = (values: object) => {
  window.alert(preJson(values));
};

// @ts-ignore
export const preJson = (values?: object) => JSON.stringify(values || {}, 0, 2);

type FinalForm = {
  initialValues?: object;
  children?: ReactNode;
};

export const FormDemo = ({ initialValues, children }: FinalForm) => {
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          {children}
          <Button disabled={submitting || pristine}>Submit</Button>
          <Button htmlType="button" type="secondary" onClick={form.reset} disabled={submitting || pristine}>
            Reset
          </Button>
          <pre>{preJson(values)}</pre>
        </form>
      )}
    </Form>
  );
};

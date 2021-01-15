import React from 'react';
import { useComponents } from '@dvhb/ui';

const listOptions = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
];

export const DvhbUiDemo = () => {
  const { Text, Button, Checkbox, Col, Row, Select, Input, Field, Datepicker, DatepickerPeriod } = useComponents();
  return (
    <Row>
      <Col>
        <Button>button</Button>
        <Checkbox checked />
        <Text tag="h1">Text h1</Text>
        <Text>Text</Text>
        <Field label="select">
          <Select options={listOptions} />
        </Field>
        <Field label="input">
          <Input />
        </Field>
        <Field label="input with mask">
          <Input mask="99.99.9999" />
        </Field>
        <Field label="datepicker">
          <Datepicker value="2020-02-20" />
        </Field>
        <Field label="datepicker period">
          <DatepickerPeriod value="2020-03-20/2020-03-29" />
        </Field>
      </Col>
    </Row>
  );
};

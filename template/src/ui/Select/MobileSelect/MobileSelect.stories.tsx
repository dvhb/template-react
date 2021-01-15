import React from 'react';
import { action } from '@storybook/addon-actions';

import { mockOptionsSimple } from '../__mock__';
import { MobileSelect } from './MobileSelect';

export default {
  title: 'UI/MobileSelect',
};

const props = {
  options: mockOptionsSimple,
  onChange: action('onChange'),
};

const value = mockOptionsSimple[0];

export const Default = () => <MobileSelect {...props} modalProps={{ isOpen: true }} />;

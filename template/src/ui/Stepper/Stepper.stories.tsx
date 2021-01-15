import { action } from '@storybook/addon-actions';
import React from 'react';

import { Stepper } from './Stepper';

export default {
  title: 'UI/Stepper',
};

const stepperData = [
  {
    title: 'Step 1',
  },
  {
    title: 'Step 2',
  },
  {
    title: 'Step 3',
  },
  {
    title: 'Step 4',
  },
  {
    title: 'Step 5',
  },
];

const props = {
  steps: stepperData,
  onChangeActiveStep: action('onChangeActiveStep'),
  activeStep: 3,
};

export const Default = () => <Stepper {...props} />;

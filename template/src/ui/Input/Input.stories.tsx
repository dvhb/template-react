import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Input } from './Input';
import { InputWithIcon } from './InputWithIcon';

export default {
  title: 'UI/Input',
  decorators: [withKnobs],
};

export const Default = () => <Input placeholder="placeholder" />;
export const WithIcon = () => <InputWithIcon iconName="Calendar" placeholder="some placeholder" />;
export const WithMask = () => <InputWithIcon iconName="Calendar" placeholder="some placeholder" mask="99.99" />;

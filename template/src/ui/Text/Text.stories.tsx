import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Text } from './Text';

export default {
  title: 'UI/Text',
  decorators: [withKnobs],
};

export const Default = () => (
  <>
    <Text tag="h1">Text h1</Text>
    <Text>Text</Text>
    <Text size="sm">Text sm</Text>
  </>
);

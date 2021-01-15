import React from 'react';

import { Popover } from './Popover';
import { Text } from '../Text';

export default {
  title: 'UI/Popover',
};

export const Default = () => (
  <Popover isOpen position={'bottom'} content={<Text>Hi! I'm popover content.</Text>}>
    <span>Popover positioner</span>
  </Popover>
);

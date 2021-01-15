import React from 'react';

import { Button } from './Button';

export default {
  title: 'UI/Button',
};

export const Default = () => <Button>button</Button>;

export const Secondary = () => <Button type="secondary">button</Button>;

export const Block = () => <Button block>button</Button>;

export const Unstyled = () => <Button type="unstyled">button</Button>;

export const Link = () => <Button type="asLink">asLink</Button>;

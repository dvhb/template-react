import React from 'react';
import { action } from '@storybook/addon-actions';

import { MyComponent, MyComponentProps } from './MyComponent';

export default {
  title: 'Components/MyComponent',
};

const props: MyComponentProps = {
  onClick: action('onClick'),
};

export const Default = () => <MyComponent {...props}>My component</MyComponent>;

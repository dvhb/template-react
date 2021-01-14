import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type MyComponentProps = {
  onClick?: () => void;
};

export const MyComponent: FC<MyComponentProps> = props => {
  return <div className={cn(styles.container)} {...props} />;
};

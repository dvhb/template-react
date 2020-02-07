import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {};

export function Page({ ...props }: Props) {
  return <div className={cn(styles.myComponent)} {...props} />;
}

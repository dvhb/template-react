import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type PageProps = {};

export const Page: FC<PageProps> = ({ ...props }) => {
  return <div className={cn(styles.container)} {...props} />;
};

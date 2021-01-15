import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { DvhbUiDemo } from '../../ui/DvhbUiDemo';

export type PageProps = {};

export const Page: FC<PageProps> = () => {
  return (
    <div className={cn(styles.container)}>
      <DvhbUiDemo />
    </div>
  );
};

import React, { ReactNode } from 'react';
import cn from 'classnames';

// import styles from './styles.module.scss';
import './test.styl';

type Props = {
  children?: ReactNode;
  variant?: 'unstyled' | 'asLink' | 'black' | 'borderedBlack' | 'whiteBorderedBlack';
  size?: 'lg';
  block?: boolean;
  disabled?: boolean;
  className?: string;
};

export function Button({ children, size, variant, block, className, ...props }: Props) {
  return (
    <button type="button" className={cn('button-stylus')} {...props}>
      {children}
    </button>
  );
}

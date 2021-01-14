import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type ButtonProps = {
  children?: ReactNode;
  variant?: 'unstyled' | 'asLink' | 'black' | 'borderedBlack' | 'whiteBorderedBlack';
  size?: 'lg';
  block?: boolean;
  disabled?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ children, size, variant, block, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        variant && styles[`button_${variant}`],
        size === 'lg' && styles.buttonLg,
        block && styles.buttonBlock,
        className && className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

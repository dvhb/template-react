import React from 'react';
import styled, { css } from 'styled-components';
import { Popover as UIPopover, PopoverProps as UIPopoverProps } from '@dvhb/ui';
import cn from 'classnames';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { xs } from '../../theme/variables';

export type PopoverProps = {
  className?: string;
  type?: 'default' | 'black';
  onClickClose?: () => void;
} & UIPopoverProps;

const PopoverPure = ({
  padding = 8,
  className = 'popover',
  position = ['bottom'],
  align = 'start',
  onClickClose,
  content: customContent,
  containerClassName,
  ...rest
}: PopoverProps) => {
  const customContainerClassName = `${className}__container`;
  const StyledClose = `${className}__close`;

  return (
    <UIPopover
      padding={padding}
      position={position}
      align={align}
      containerClassName={cn(containerClassName, customContainerClassName)}
      content={
        <>
          {onClickClose && (
            <div className={StyledClose}>
              <Button onClick={onClickClose} type="unstyled">
                <Icon name="Cross" />
              </Button>
            </div>
          )}
          {customContent}
        </>
      }
      {...rest}
    />
  );
};

export const Popover = styled(PopoverPure)<PopoverProps>`
  &__container {
    padding: 12px;
    border-radius: 4px;
    box-shadow: 0px 8px 20px rgba(21, 23, 27, 0.2);
    background-color: #fff;
    max-width: 500px;
    z-index: 10;

    @media ${xs} {
      left: 20px !important;
      right: 20px !important;
    }

    ${p =>
      p.onClickClose &&
      css`
        padding-left: 28px;
        padding-right: 32px;
      `}

    ${p =>
      p.type === 'black' &&
      css`
        background: #3b3e45;
        border-radius: 8px;
        color: #fff;
      `}
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

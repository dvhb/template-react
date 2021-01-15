import React, { FC } from 'react';
import styled from 'styled-components';
import { Modal as UIModal, ModalProps as UIModalProps } from '@dvhb/ui';

import { Icon } from '../Icon';
import { StyledCloseButton, StyledModalContent, StyledCloseButtonText } from './styled';
import { Text } from '../Text';

const ModalContent = (props: any) => <StyledModalContent {...props} />;
const CloseButton = (props: any) => (
  <StyledCloseButton type="unstyled" {...props}>
    <StyledCloseButtonText>
      <Icon size="inherit" name="Cross" />
    </StyledCloseButtonText>
  </StyledCloseButton>
);

export type ModalProps = {} & UIModalProps;

const ModalPure: FC<ModalProps> = ({ className = 'ReactModal', components, isOpen, children, ...rest }) => {
  const contentWrapperClassName = `${className}__contentWrapper`;
  const overlayClassName = `${className}__overlay`;

  return (
    <UIModal
      components={{ ModalContent, CloseButton, ...components }}
      contentWrapperClassName={contentWrapperClassName}
      overlayClassName={overlayClassName}
      isOpen={isOpen}
      {...rest}
    >
      <Text tag="div">{children}</Text>
    </UIModal>
  );
};

export const Modal = styled(ModalPure)`
  //&__contentWrapper {
  //}
  //&__overlay {
  //}
`;

import React from 'react';
import { Select as UISelect } from '@dvhb/ui';

import { useTheme } from '../../../theme';
import {
  StyledControl,
  StyledOption,
  StyledMenu,
  StyledOptionDescription,
  StyledModalContent,
  StyledTextContainer,
  StyledSelectContainer,
  StyledLabel,
} from './styled';
import { Modal, ModalProps } from '../../Modal';
import { SelectProps } from '../Select';
import styled from 'styled-components';
import { Text } from '../../Text';

export type MobileSelectProps = {
  modalProps: ModalProps;
} & SelectProps;

const Control = ({ cx, ...props }: any) => {
  const theme = useTheme();
  return <StyledControl {...props} {...props.innerProps} theme={theme} />;
};

const Menu = ({ cx, ...props }: any) => <StyledMenu {...props} {...props.innerProps} />;

const SelectContainer = ({ cx, ...props }: any) => <StyledSelectContainer {...props} />;

const Option = ({ cx, ...props }: any) => {
  const theme = useTheme();
  return (
    <StyledOption {...props} {...props.innerProps} theme={theme}>
      {props.data.label}
      {props.data.description && (
        <>
          {' '}
          <StyledOptionDescription color="grey">({props.data.description})</StyledOptionDescription>
        </>
      )}
    </StyledOption>
  );
};

const ModalContent = (props: any) => <StyledModalContent {...props} />;

const MobileSelectPure = ({
  components,
  className = 'mobileSelectModal',
  modalProps,
  fieldOptions,
  ...rest
}: MobileSelectProps) => {
  const contentWrapperClassName = `${className}__contentWrapper`;
  return (
    <Modal
      {...modalProps}
      className={className}
      contentWrapperClassName={contentWrapperClassName}
      components={{ ModalContent }}
      disableBodyScroll={false}
    >
      <StyledTextContainer>
        <StyledLabel>{fieldOptions?.label && <Text size="h1">{fieldOptions.label}</Text>}</StyledLabel>
        <UISelect
          components={{
            ...components,
            Option,
            Menu,
            // MenuList,
            Control,
            SelectContainer,
            DropdownIndicator: null,
            IndicatorSeparator: null,
          }}
          menuIsOpen
          {...rest}
        />
      </StyledTextContainer>
    </Modal>
  );
};

export const MobileSelect = styled(MobileSelectPure)`
  padding: 0;

  &__contentWrapper {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: auto;
  }
`;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { components as defaultComponents } from 'react-select';
import { Select as UISelect, SelectProps as UISelectProps } from '@dvhb/ui';

import { Icon } from '../Icon';
import { useTheme, Theme } from '../../theme';
import {
  StyledControl,
  StyledDropdownIndicator,
  StyledMultiValueContainer,
  StyledMultiValueLabel,
  StyledMultiValueRemove,
  StyledOption,
  StyledMenu,
  StyledSelectContainer,
  StyledOptionDescription,
} from './styled';
import { MobileSelect } from './MobileSelect/MobileSelect';
import { FieldProps } from '../Field';

export type SelectProps = {
  theme?: Theme;
  size?: 'default' | 'sm';
  fieldOptions?: Pick<FieldProps, 'label' | 'labelHint' | 'description'>;
} & UISelectProps;

const Input = ({ innerRef, ...innerProps }: any) => <defaultComponents.Input ref={innerRef} {...innerProps} />;

export const Select = ({
  components,
  size,
  value,
  onChange,
  isMulti,
  onMenuOpen,
  fieldOptions,
  ...rest
}: SelectProps) => {
  const selectRef = useRef<HTMLElement>();
  const theme = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile && modalIsOpen) {
      selectRef.current?.blur();
    }
  }, [modalIsOpen]);

  // Emit click event on mobile devices
  const stopPropagation = (e: TouchEvent) => e.stopPropagation();

  const Control = useCallback(
    ({ cx, ...props }: any) => (
      <StyledControl size={size} {...props} {...props.innerProps} theme={theme} onTouchEnd={stopPropagation} />
    ),
    [],
  );
  const DropdownIndicator = ({ cx, ...props }: any) => (
    <StyledDropdownIndicator theme={theme} {...props.innerProps}>
      <Icon name="ArrowRight" />
    </StyledDropdownIndicator>
  );
  const MultiValueContainer = ({ cx, ...props }: any) => <StyledMultiValueContainer {...props} theme={theme} />;
  const MultiValueLabel = ({ cx, ...props }: any) => <StyledMultiValueLabel {...props} theme={theme} />;
  const MultiValueRemove = ({ cx, ...props }: any) => (
    <StyledMultiValueRemove {...props} {...props.innerProps} theme={theme} onTouchEnd={stopPropagation}>
      <Icon name="Cross" />
    </StyledMultiValueRemove>
  );
  const Option = ({ cx, ...props }: any) => (
    <StyledOption size={size} {...props} {...props.innerProps} theme={theme}>
      {props.data.label}
      {props.data.description && (
        <>
          {' '}
          <StyledOptionDescription color="grey">({props.data.description})</StyledOptionDescription>
        </>
      )}
    </StyledOption>
  );

  const Menu = ({ cx, ...props }: any) => <StyledMenu {...props} {...props.innerProps} />;

  const SelectContainer = useCallback(
    ({ cx, ...props }: any) => <StyledSelectContainer {...props} {...props.innerProps} data-cy={rest.dataCy} />,
    [],
  );
  const NoOptionsMessage = (props: any) => (
    <defaultComponents.NoOptionsMessage {...props}>No data</defaultComponents.NoOptionsMessage>
  );

  const handleOnChange = useCallback((value: any, action: any) => {
    onChange?.(value, action);
    if (!isMulti) handleModalClose();
  }, []);

  const handleOnMenuOpen = useCallback(() => {
    setModalIsOpen(true);
    onMenuOpen?.();
  }, []);

  const handleModalClose = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <UISelect
        ref={selectRef}
        components={{
          ...components,
          Control,
          DropdownIndicator,
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
          Option,
          Menu,
          SelectContainer,
          NoOptionsMessage,
          IndicatorSeparator: null,
        }}
        isMulti={isMulti}
        onChange={handleOnChange}
        value={value}
        blurInputOnSelect
        onMenuOpen={handleOnMenuOpen}
        {...rest}
      />

      {isMobile && (
        <MobileSelect
          modalProps={{ isOpen: modalIsOpen, onRequestClose: handleModalClose }}
          components={{
            ...components,
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
            NoOptionsMessage,
          }}
          fieldOptions={fieldOptions}
          onChange={handleOnChange}
          isMulti={isMulti}
          value={value}
          autoFocus
          {...rest}
        />
      )}
    </>
  );
};

import React, { FC } from 'react';
import styled from 'styled-components';
import { Field as UIField, FieldProps as UIFieldProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { Hint } from '../Hint';
import { Spacer } from '../Spacer';
import { StyledTextHelper } from './styled';

export type FieldProps = { theme?: Theme; descriptionLeftPadding?: boolean } & UIFieldProps;

const FieldStyled = styled(UIField)<FieldProps>``;

const Label = ({ children }: any) => (
  <div>
    {children}
    <Spacer margin="xs" />
  </div>
);

export const Field: FC<FieldProps> = ({ descriptionLeftPadding, label, ...rest }) => {
  const theme = useTheme();

  const TextHelper = (props: any) => {
    return (
      <StyledTextHelper
        descriptionLeftPadding={descriptionLeftPadding}
        textColor="grey"
        size="sm"
        theme={theme}
        {...props}
      />
    );
  };

  return (
    <>
      {rest.error && <div id={'error'} />}
      <FieldStyled
        theme={theme}
        components={{ TextHelper, Label, Hint: (props) => <Hint mobileTitle={label} {...props} /> }}
        label={label}
        {...rest}
      />
    </>
  );
};

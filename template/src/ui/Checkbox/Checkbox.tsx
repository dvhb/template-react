import React from 'react';
import { Checkbox as UICheckbox, CheckboxProps as UICheckboxProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { StyledCheckboxControl, StyledLabel } from './styled';

export type CheckboxProps = { theme?: Theme } & UICheckboxProps;

export const Checkbox = ({ ...rest }: CheckboxProps) => {
  const theme = useTheme();
  return (
    <UICheckbox
      theme={theme}
      {...rest}
      components={{
        CheckboxControl: props => <StyledCheckboxControl theme={theme} data-cy={(rest as any)['data-cy']} {...props} />,
        Label: props => <StyledLabel {...props} />,
      }}
    />
  );
};

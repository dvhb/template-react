import React, { useCallback } from 'react';
import { Field, InputProps } from '@dvhb/ui';

import { Input } from '../Input';
import { StyledIcon } from './styled';
import { useTheme } from '../../../theme';
import { Icon, IconNamesType } from '../../Icon';

type Props = {
  iconName: IconNamesType;
  onIconClick?: () => void;
} & InputProps;

export const InputWithIcon = ({ iconName, onIconClick, ...props }: Props) => {
  const theme = useTheme();

  const handleOnClick = useCallback(() => onIconClick?.(), [onIconClick]);

  return (
    <Field style={{ position: 'relative', zIndex: 2 }} bottomMargin={false}>
      <Input {...props} />
      <Field.Helper onClick={handleOnClick}>
        <StyledIcon theme={theme}>
          <Icon name={iconName} />
        </StyledIcon>
      </Field.Helper>
    </Field>
  );
};

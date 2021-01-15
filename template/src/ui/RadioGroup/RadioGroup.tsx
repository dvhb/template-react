import React from 'react';
import { RadioGroup as UIRadioGroup, RadioGroupProps, RadioGroupItem, Text } from '@dvhb/ui';

import { StyledRadio, StyledLabelWrapper } from './styled';
import { useTheme } from '../../theme';

export const RadioGroup = ({ children, ...rest }: RadioGroupProps) => {
  const theme = useTheme();

  const Radio = (props: any) => <StyledRadio theme={theme} {...props} />;
  const LabelWrapper = (props: any) => <StyledLabelWrapper {...props} />;
  const Label = (props: any) => <Text {...props} />;

  return (
    <UIRadioGroup components={{ Radio, LabelWrapper, Label }} {...rest}>
      {children}
    </UIRadioGroup>
  );
};

RadioGroup.Item = RadioGroupItem;

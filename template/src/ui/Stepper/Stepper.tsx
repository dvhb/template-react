import React from 'react';
import { Stepper as UIStepper, StepperProps as UIStepperProps, StepperStepComponentProps } from '@dvhb/ui';

import { StyledCounter, StyledArrow, StyledTitle, StyledStep } from './styled';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';

export type StepperProps = {} & UIStepperProps;

export const Stepper = ({ steps, activeStep, ...rest }: StepperProps) => {
  const theme = useTheme();

  const StepperCounter = (props: StepperStepComponentProps) => (
    <StyledCounter {...props} theme={theme}>
      <Text size="inherit" weight="bold" color="inherit" data-cy={props.active ? 'currentStepNumber' : 'stepNumber'}>
        {props.children}
      </Text>
    </StyledCounter>
  );

  const StepperArrow = (props: StepperStepComponentProps) => (
    <StyledArrow {...props} theme={theme}>
      <Icon name="ArrowRight" />
    </StyledArrow>
  );

  const StepperTitle = (props: StepperStepComponentProps) => (
    <StyledTitle {...props} theme={theme}>
      <Text weight="bold" size="inherit">
        {props.children}
      </Text>
    </StyledTitle>
  );

  const StepperStep = (props: StepperStepComponentProps) => <StyledStep {...props} theme={theme} />;

  return (
    <UIStepper
      steps={steps}
      activeStep={activeStep}
      components={{ StepperCounter, StepperArrow, StepperTitle, StepperStep }}
      {...rest}
    />
  );
};

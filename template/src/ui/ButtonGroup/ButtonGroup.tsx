import React, { useEffect, useState } from 'react';
import {
  ButtonGroup as UIButtonGroup,
  ButtonGroupButtonProps,
  ButtonGroupContainerProps,
  ButtonGroupProps as UIButtonGroupProps,
} from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { StyledButton, StyledContainer } from './styled';
import { useWindowSize } from '../../utils';

export type ButtonGroupProps = { theme?: Theme; asButtonOnSm?: boolean; dataCy?: string } & UIButtonGroupProps;

export const ButtonGroup = ({ asButtonOnSm, ...rest }: ButtonGroupProps) => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const [asButton, setAsButton] = useState(false);

  useEffect(() => {
    if (asButtonOnSm) {
      if (width && width < 768) {
        setAsButton(true);
      } else {
        setAsButton(false);
      }
    }
  }, [width, asButtonOnSm]);

  const ButtonGroupContainer = (props: ButtonGroupContainerProps) => (
    <StyledContainer asButton={asButton} theme={theme} data-cy={rest.dataCy} {...props} />
  );
  const ButtonGroupButton = (props: ButtonGroupButtonProps) => (
    // @ts-ignore
    <StyledButton asButton={asButton} theme={theme} {...props} />
  );

  return <UIButtonGroup components={{ ButtonGroupContainer, ButtonGroupButton }} {...rest} />;
};

import React, { useCallback } from 'react';
import { HintProps as UIHintProps } from '@dvhb/ui';

import { useTheme, Theme } from '../../theme';
import { StyledIcon, StyledHint, StyledPopup, StyledPopupContent, StyledClose } from './styled';
import { useWindowSize } from '../../utils/hooks';
import { Icon as UIIcon } from '../Icon';
import { Text } from '../Text';
import { Spacer } from '../Spacer';

type HintProps = { theme?: Theme; mobileTitle?: string } & UIHintProps;

const Popup = (props: any) => {
  const theme = useTheme();

  const handleOnCloseClick = useCallback(() => {
    props.onClose();
  }, [props]);

  return (
    <StyledPopup {...props}>
      {props.children}
      <StyledClose theme={theme} onClick={handleOnCloseClick}>
        <UIIcon name="Cross" />
      </StyledClose>
    </StyledPopup>
  );
};

const PopupContent = ({ title, children, ...rest }: any) => (
  <StyledPopupContent {...rest}>
    {title && (
      <Spacer>
        <Text size="h2">{title}</Text>
      </Spacer>
    )}
    {children}
  </StyledPopupContent>
);

const Icon = (props: any) => {
  const theme = useTheme();
  return <StyledIcon theme={theme} {...props} />;
};

export const Hint = ({ mobileTitle, ...rest }: HintProps) => {
  const theme = useTheme();
  const { width } = useWindowSize();

  let componentsObj = { Icon };

  if (width && width < 768) {
    componentsObj = Object.assign(componentsObj, {
      Popup,
      PopupContent: (props: any) => <PopupContent title={mobileTitle} {...props} />,
      PopupIcon: undefined,
    });
  }

  const containerId = document.getElementById('calculator')
    ? 'calculator'
    : document.getElementById('pageWrapper')
    ? 'pageWrapper'
    : document.getElementById('pageLayout')
    ? 'pageLayout'
    : undefined;

  return <StyledHint theme={theme} components={componentsObj} containerId={containerId} {...rest} />;
};

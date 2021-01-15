import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as UILink, LinkProps as UILinkProps } from '@dvhb/ui';

import { Theme, useTheme } from '../../theme';
import { StyledLink } from './styled';
import { Text } from '../Text';

export type LinkProps = {
  to?: string;
  asButton?: boolean;
} & UILinkProps;

export const Link: FC<LinkProps> = ({ children, to, asButton, ...rest }) => {
  const theme = useTheme();

  const Link = (props: any) => (
    <StyledLink asButton={asButton} theme={theme} {...props} to={to} as={to ? RouterLink : 'a'}>
      {/*
          // @ts-ignore */}
      <Text size="inherit" color="inherit" as="span">
        {props.children}
      </Text>
    </StyledLink>
  );

  return (
    <UILink components={{ Link }} {...rest}>
      {children}
    </UILink>
  );
};

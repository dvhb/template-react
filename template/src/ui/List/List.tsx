import React, { FC } from 'react';
import { List as UIList, ListProps } from '@dvhb/ui';

import { useTheme } from '../../theme';
import { StyledListItem } from './styled';

const ListItem = (props: any) => {
  const theme = useTheme();

  return <StyledListItem theme={theme} {...props} />;
};

export const List: FC<ListProps> = ({ ...rest }) => {
  return <UIList components={{ ListItem }} {...rest} />;
};

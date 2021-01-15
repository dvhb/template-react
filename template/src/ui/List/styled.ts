import styled from 'styled-components';

import { Text } from '../Text';
import { Theme } from '../../theme';

export const StyledListItem = styled(Text)<Theme>`
  position: relative;
  padding-left: 32px;

  & + & {
    margin-top: 8px;
  }

  &:before {
    content: '—';
    position: absolute;
    color: ${(p) => p.theme.primaryColor};
    left: 0;
    top: 0;
    width: 32px;
    text-align: center;
  }
`;

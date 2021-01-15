import styled from 'styled-components';

import { Theme } from '../../../theme';

export const StyledIcon = styled.div<Theme>`
  color: ${p => p.theme?.primaryColor};
`;

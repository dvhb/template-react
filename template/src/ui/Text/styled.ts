import { Text as UIText } from '@dvhb/ui';
import styled, { css } from 'styled-components';

import { TextProps } from './Text';
import { xs } from '../../theme/variables';

export const StyledText = styled(UIText)<TextProps>`
  && {
    font-family: 'Open Sans', sans-serif;
    ${p =>
      p.size !== 'inherit' &&
      css`
        font-size: ${p => p.theme.text?.fontSize || p.theme.fontSize};
        font-weight: ${p => p.theme.text?.fontWeight};
        line-height: ${p => p.theme.text?.lineHeight};
      `}    

    ${p =>
      p.size === 'h1' &&
      css`
        font-size: ${p => p.theme.text?.h1?.fontSize};
        font-weight: ${p => p.theme.text?.h1?.fontWeight};
        line-height: ${p => p.theme.text?.h1?.lineHeight};
        margin-bottom: ${p => p.theme.text?.h1?.marginBottom};

        @media ${xs} {
          font-size: 24px;
          line-height: 32px;
        }
      `}
      
    ${p =>
      p.size === 'h2' &&
      css`
        font-size: ${p => p.theme.text?.h2?.fontSize};
        font-weight: ${p => p.theme.text?.h2?.fontWeight};
        line-height: ${p => p.theme.text?.h2?.lineHeight};
        margin-bottom: ${p => p.theme.text?.h2?.marginBottom};
      `}  

    ${p =>
      p.size === 'sm' &&
      css`
        font-size: ${p => p.theme.text?.sm?.fontSize};
        font-weight: ${p => p.theme.text?.sm?.fontWeight};
        line-height: ${p => p.theme.text?.sm?.lineHeight};
      `}
      
    ${p =>
      p.size === 'lg' &&
      css`
        font-size: ${p => p.theme.text?.lg?.fontSize};
        line-height: ${p => p.theme.text?.lg?.lineHeight};
      `}   
    
      ${p =>
        p.breakWord &&
        css`
          word-break: break-word;
        `}   

    ${p =>
      p.color === 'grey' &&
      css`
        color: #767a83;
      `}
        
    ${p =>
      p.color === 'primaryColor' &&
      css`
        color: ${p => p.theme?.primaryColor};
      `}
    
    ${p =>
      p.color === 'secondaryColor' &&
      css`
        color: ${p => p.theme?.secondaryColor};
      `}
      
     ${p =>
       p.color === 'errorColor' &&
       css`
         color: ${p => p.theme?.errorColor};
       `}  
  }
`;

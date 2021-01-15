import styled, { css } from 'styled-components';

import { xs } from '../../theme/variables';
import { LinkProps } from './Link';

export const StyledLink = styled.a<LinkProps>`
  color: ${(p) => p.theme?.primaryColor};
  font-size: 10px;
  font-weight: ${(p) => p.theme?.button?.fontWeight};
  text-transform: uppercase;
  line-height: 16px;
  transition: opacity 0.6s ease;
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme?.primaryColor};
    opacity: 0.7;
  }

  ${(p) =>
    p.asButton &&
    css`
      align-items: center;
      border: none;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      justify-content: center;
      max-width: 100%;
      padding: 0 12px;
      position: relative;
      text-align: center;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;

      background-color: ${(p) => p.theme?.primaryColor};
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      border-radius: ${(p) => p.theme?.button?.borderRadius || '30px'};
      box-shadow: 0px 8px 20px rgba(122, 13, 13, 0.2), 0px 4px 4px rgba(122, 13, 13, 0.1);
      height: 48px;
      min-width: 320px;
      text-transform: uppercase;
      transition: opacity 0.6s ease;

      &:hover {
        opacity: 0.8;
        text-decoration: none;
        color: #fff;
      }

      @media ${xs} {
        min-width: 0;
        width: 100%;
      }
    `}
`;

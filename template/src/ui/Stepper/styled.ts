import styled, { css } from 'styled-components';
import { StepperStepComponentProps } from '@dvhb/ui';
import { Theme } from '../../theme';

export const StyledCounter = styled.div<StepperStepComponentProps & Theme>`
  width: 40px;
  height: 40px;
  background: #e3e6ec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 16px;
  color: #767a83;

  ${p =>
    p.active &&
    css`
      background-color: ${p => p.theme?.primaryColor};
      color: #fff;
    `}

  ${p =>
    p.completed &&
    css`
      background-color: ${p => p.theme?.secondaryColor};
      color: #fff;
    `}
`;

export const StyledArrow = styled.div<StepperStepComponentProps & Theme>`
  margin-left: 12px;
  opacity: 0.5;

  ${p =>
    p.completed &&
    css`
      opacity: 1;
    `}
`;

export const StyledTitle = styled.div<StepperStepComponentProps & Theme>`
  && {
    max-width: 120px;
    font-size: 10px;
    text-transform: uppercase;
    line-height: 16px;
    width: min-content;
  }
  opacity: 0.7;

  ${p =>
    p.completed &&
    css`
      opacity: 1;
    `}

  ${p =>
    p.active &&
    css`
      opacity: 1;
    `}
`;

export const StyledStep = styled.div<StepperStepComponentProps>`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 16px;
  }

  ${p =>
    p.completed &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledTitle} {
          opacity: 0.7;
        }
      }
    `}
`;

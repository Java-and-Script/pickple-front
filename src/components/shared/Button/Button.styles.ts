import styled from '@emotion/styled';

import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize / 16}rem` : fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textColor }) => textColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.75rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

import styled from '@emotion/styled';

import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ theme }) => theme.LINE_HEIGHT};
  color: ${({ textColor }) => textColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.75rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

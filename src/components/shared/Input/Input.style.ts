import styled from '@emotion/styled';

import type { InputProps } from '.';

export const StyledInput = styled.input<
  Pick<InputProps, 'height' | 'border' | 'fontSize'>
>`
  outline: none;
  border: none;
  width: 100%;
  line-height: ${({ height }) => height};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
`;
export const InputContainer = styled.div<
  Omit<InputProps, 'handleChange' | 'isAutofocus'>
>`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
`;

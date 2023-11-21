import React, { ForwardedRef, forwardRef } from 'react';

import { theme } from '@styles/theme';

import { InputContainer, StyledInput } from './Input.style';

export type InputProps = {
  isAutofocus?: boolean;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  innerColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

export const Input = forwardRef(
  (
    {
      children,
      isAutofocus = false,
      height = '30px',
      fontSize = theme.FONT_SIZE.MD,
      backgroundColor = 'white',
      innerColor,
      border = 'none',
      borderRadius = '0%',
      padding = '0px 10px',
      onSubmit,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const stringifiedHeight =
      typeof height === 'number' ? `${height / 16}rem` : height;

    return (
      <InputContainer
        backgroundColor={backgroundColor}
        height={stringifiedHeight}
        border={border}
        borderRadius={borderRadius}
        padding={padding}
        onSubmit={onSubmit}
      >
        <StyledInput
          autoFocus={isAutofocus}
          height={stringifiedHeight}
          fontSize={fontSize}
          innerColor={innerColor ?? backgroundColor}
          ref={ref}
          {...props}
        />
        {children}
      </InputContainer>
    );
  }
);

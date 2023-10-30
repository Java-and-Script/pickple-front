import { theme } from '@styles/theme';

import { InputContainer, StyledInput } from './Input.style';

export type InputProps = {
  isAutofocus?: boolean;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
} & React.ComponentProps<'input'>;

export const Input = ({
  isAutofocus = false,
  height = '30px',
  fontSize = theme.FONT_SIZE.MD,
  backgroundColor = 'white',
  border = 'none',
  borderRadius = '0%',
  padding = '0px 10px',
  ...props
}: InputProps) => {
  const stringifiedHeight =
    typeof height === 'number' ? `${height / 16}rem` : height;

  return (
    <InputContainer
      backgroundColor={backgroundColor}
      height={stringifiedHeight}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
    >
      <StyledInput
        autoFocus={isAutofocus}
        height={stringifiedHeight}
        fontSize={fontSize}
        {...props}
      />
    </InputContainer>
  );
};

import styled from '@emotion/styled';

type ButtonProps = {
  width: number;
  height: number;
  text: string;
  fontSize: number;
  fontWeight: number;
  lineHeight?: number;
  textColor: string;
  borderColor?: string;
  backgroundColor: string;
  handleClick: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ theme }) => theme.LINE_HEIGHT};
  color: ${({ textColor }) => textColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.75rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.handleClick} {...props}>
      {props.text}
    </StyledButton>
  );
};

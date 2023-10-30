import { StyledButton } from './Button.styles';

export type ButtonProps = {
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

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.handleClick} {...props}>
      {props.text}
    </StyledButton>
  );
};

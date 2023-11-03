import { PropsWithChildren } from 'react';

import { StyledButton } from './Button.styles';

export type ButtonProps = PropsWithChildren<{
  width: string;
  height: string;
  fontSize?: number | string;
  fontWeight: number;
  lineHeight?: number | string;
  textColor: string;
  borderColor?: string;
  backgroundColor: string;
}> &
  React.ComponentProps<'button'>;

export const Button = ({ onClick, ...props }: ButtonProps) => {
  const { children } = props;
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

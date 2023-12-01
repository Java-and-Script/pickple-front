import { theme } from '@styles/theme';

import { StyledButton } from './BottomButton.styles';

export const BottomButton = ({
  children,
  onClick,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <StyledButton
      {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

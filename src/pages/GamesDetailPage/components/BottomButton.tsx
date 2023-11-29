import { PropsWithChildren } from 'react';

import { Button } from '@components/shared/Button';

import { theme } from '@styles/theme';

export const BottomButton = ({
  onClick,
  children,
}: PropsWithChildren & { onClick: VoidFunction }) => {
  return (
    <Button
      {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
      height="50px"
      width="100%"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

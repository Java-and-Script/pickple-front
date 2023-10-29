import { theme } from '@styles/theme';

import { StyledToggleButton } from './ToggleButton.style';

type ToggleButtonProps = {
  label?: string;
  value: string;
  isActive: boolean;
  width?: number | string;
  height?: number | string;
  fontSize?: string;
  onToggle: (value: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ToggleButton = ({
  label,
  value,
  isActive,
  width = '100%',
  height = '60px',
  fontSize = theme.FONT_SIZE.MD,
  onToggle,
  ...props
}: ToggleButtonProps) => {
  const stringifiedWidth =
    typeof width === 'number' ? `${width / 16}rem` : width;
  const stringifiedHeight =
    typeof height === 'number' ? `${height / 16}rem` : height;

  const handleToggle = () => {
    onToggle(value);
  };

  return (
    <StyledToggleButton
      isActive={isActive}
      onClick={handleToggle}
      width={stringifiedWidth}
      height={stringifiedHeight}
      fontSize={fontSize}
      {...props}
    >
      {label ?? value}
    </StyledToggleButton>
  );
};

import styled from '@emotion/styled';

export const StyledToggleButton = styled('button')<{
  isActive: boolean;
  width: string;
  height: string;
  fontSize: string;
  border?: string;
}>(({ width, height, fontSize, theme, isActive, border }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width: width,
  height: height,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  fontSize: fontSize,
  color: isActive ? theme.PALETTE.RED_400 : theme.PALETTE.GRAY_400,
  border: border
    ? border
    : `1px solid ${isActive ? theme.PALETTE.RED_400 : theme.PALETTE.GRAY_400}`,
  lineHeight: theme.LINE_HEIGHT,
  borderRadius: '0.75rem',
  cursor: 'pointer',
}));

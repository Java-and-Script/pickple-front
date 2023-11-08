import { HTMLAttributes } from 'react';

import { LINE_HEIGHT } from '@styles/font';

import { StyledParagraph } from './Text.styles';

type Textprops = {
  children: React.ReactNode;
  size?: number | string;
  weight?: 300 | 500 | 700;
  lineHeight?: string;
  ellipsis?: number;
  color?: string;
} & Omit<HTMLAttributes<HTMLParagraphElement>, 'children'>;

export const Text = ({
  children,
  size = 16,
  weight = 500,
  lineHeight = LINE_HEIGHT,
  ellipsis,
  color = 'inherit',
  ...props
}: Textprops) => {
  const stringifiedSize = typeof size === 'number' ? `${size / 16}rem` : size;
  const lineClamp = ellipsis
    ? `
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${ellipsis};
      `
    : '';

  return (
    <StyledParagraph
      size={stringifiedSize}
      weight={weight}
      lineHeight={lineHeight}
      lineClamp={lineClamp}
      color={color}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

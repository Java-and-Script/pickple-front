import { HTMLAttributes } from 'react';

import { LINE_HEIGHT } from '@styles/font';

import { StyledParagraph } from './Text.styles';

type Textprops = {
  children: string;
  size?: number | string;
  weight?: 300 | 500 | 700;
  lineHeight?: string;
  ellipsis?: number;
} & Omit<HTMLAttributes<HTMLParagraphElement>, 'children'>;

export const Text = ({
  children,
  size = 16,
  weight = 500,
  lineHeight = LINE_HEIGHT,
  ellipsis,
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
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

import { HTMLAttributes } from 'react';

import { css } from '@emotion/react';

import { LINE_HEIGHT } from '@styles/font';

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
    ? css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${ellipsis};
      `
    : css``;

  return (
    <p
      css={css`
        margin: 0;
        font-size: ${stringifiedSize};
        font-weight: ${weight};
        line-height: ${lineHeight};
        ${lineClamp}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

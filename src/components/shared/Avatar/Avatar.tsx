import { HTMLAttributes } from 'react';

import { StyledImage } from './Avatar.styles';

export type AvatarProps = {
  src: string;
  size?: number;
  radius?: string;
  border?: string;
} & HTMLAttributes<HTMLImageElement>;

export const Avatar = ({
  src,
  size = 30,
  radius = '50%',
  border,
  ...props
}: AvatarProps) => {
  return (
    <StyledImage
      src={src}
      alt="avatar"
      width={size}
      border={border}
      radius={radius}
      {...props}
    />
  );
};

import { StyledImage } from './Avatar.styles';

export type AvatarProps = {
  src: string;
  size?: number;
  radius?: string;
  border?: string;
  style?: React.CSSProperties;
};

export const Avatar = ({
  src,
  size = 30,
  radius = '50%',
  border,
  style,
  ...props
}: AvatarProps) => {
  return (
    <StyledImage
      style={style}
      src={src}
      alt="avatar"
      width={size}
      border={border}
      radius={radius}
      {...props}
    />
  );
};

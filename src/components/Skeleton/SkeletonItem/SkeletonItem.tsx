import { useSkeletonContext } from '../useSkeletonContext';
import { SkeletonAnimatedDiv } from './SkeletonItem.styles';

export type SkeletonItemProps = {
  width?: string;
  height?: string;
  radius?: string;
  defaultColor?: string;
  gradientColor?: string;
};

export const SkeletonItem = ({
  width,
  height,
  radius,
  defaultColor,
  gradientColor,
}: SkeletonItemProps) => {
  const context = useSkeletonContext();

  return (
    <SkeletonAnimatedDiv
      width={width ?? context.width}
      height={height ?? context.height}
      radius={radius ?? context.radius}
      defaultColor={defaultColor ?? context.defaultColor}
      gradientColor={gradientColor ?? context.gradientColor}
    />
  );
};

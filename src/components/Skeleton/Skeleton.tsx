import { SkeletonContext } from './SkeletonContext';
import { SkeletonItem, SkeletonItemProps } from './SkeletonItem';

type SkeletonProps = {
  children: React.ReactNode;
} & Required<SkeletonItemProps>;

const Skeleton = ({ children, ...skeletonProviderProps }: SkeletonProps) => {
  return (
    <SkeletonContext.Provider value={skeletonProviderProps}>
      {children}
    </SkeletonContext.Provider>
  );
};

Skeleton.Item = SkeletonItem;

export { Skeleton };

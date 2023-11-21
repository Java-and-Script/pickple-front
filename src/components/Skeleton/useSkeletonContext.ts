import { useContext } from 'react';

import { SkeletonContext } from './SkeletonContext';

export const useSkeletonContext = () => {
  const context = useContext(SkeletonContext);
  if (!context) {
    throw new Error(
      '"useSkeletonContext"는 "SkeletonProvider"와 같이 쓰여야 합니다.'
    );
  }

  return context;
};

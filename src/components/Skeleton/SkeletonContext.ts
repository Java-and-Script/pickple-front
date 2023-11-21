import { createContext } from 'react';

import { SkeletonItemProps } from './SkeletonItem';

export const SkeletonContext =
  createContext<Required<SkeletonItemProps> | null>(null);

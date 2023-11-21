import { keyframes } from '@emotion/react';

export const generateSkeletonKeyframes = (
  defaultColor: string,
  gradientColor: string
) => {
  return keyframes`
    0% {
      background-color: ${defaultColor};
    }

    50% {
      background-color: ${gradientColor};
    }

    100% {
      background-color: ${defaultColor};
    }
    `;
};

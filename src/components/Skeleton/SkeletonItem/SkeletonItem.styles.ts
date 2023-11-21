import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { SkeletonItemProps } from '.';
import { generateSkeletonKeyframes } from './generateSkeletonKeyframes';

export const SkeletonAnimatedDiv = styled.div<Required<SkeletonItemProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};

  -webkit-animation: ${({ defaultColor, gradientColor }) => css`
    ${generateSkeletonKeyframes(
      defaultColor,
      gradientColor
    )} 1.8s infinite ease-in-out
  `};

  animation: ${({ defaultColor, gradientColor }) => css`
    ${generateSkeletonKeyframes(defaultColor, gradientColor)}
    1.8s infinite ease-in-out
  `};
`;

import styled from '@emotion/styled';

import { Image } from '@components/shared/Image';

import { AvatarProps } from './Avatar';

export const StyledImage = styled(Image)<AvatarProps>`
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
`;

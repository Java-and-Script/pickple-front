import styled from '@emotion/styled';

import { Avatar, AvatarProps } from '@components/Avatar';

import { AvatarGroupProps } from './AvatarGroup';

type AvatarContainerProps = Required<Pick<AvatarGroupProps, 'overlap'>>;

export const AvatarContainer = styled.div<AvatarContainerProps>`
  padding-left: ${({ overlap }) => `${overlap / 16}rem`};
`;

export const OverlapedAvatar = styled(Avatar)<
  AvatarProps & { overlap: number }
>`
  margin-left: ${({ overlap }) => `-${overlap / 16}rem`};
`;

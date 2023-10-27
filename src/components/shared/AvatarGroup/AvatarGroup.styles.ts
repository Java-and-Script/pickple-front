import styled from '@emotion/styled';

import { Avatar, AvatarProps } from '@components/shared/Avatar';

import { AvatarGroupProps } from './AvatarGroup';

type AvatarGroupWrapperProps = Required<Pick<AvatarGroupProps, 'overlap'>>;

export const AvatarGroupWrapper = styled.div<AvatarGroupWrapperProps>`
  padding-left: ${({ overlap }) => `${overlap / 16}rem`};
`;

export const OverlapedAvatar = styled(Avatar)<
  AvatarProps & { overlap: number }
>`
  margin-left: ${({ overlap }) => `-${overlap / 16}rem`};
`;

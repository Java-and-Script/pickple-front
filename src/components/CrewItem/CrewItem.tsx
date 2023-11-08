import { Avatar } from '@components/Avatar';
import { AvatarGroup } from '@components/AvatarGroup';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import {
  CrewDescription,
  CrewItemWrapper,
  CrewProfileImage,
} from './CrewItem.styles';

type CrewItemProps = {
  name: string;
  address: string;
  imgSrc: string;
  membersProfileImageUrls: string[];
  memberCount: number;
  maxMemberCount: number;
  onClick: VoidFunction;
};

export const CrewItem = ({
  name,
  address,
  imgSrc,
  membersProfileImageUrls,
  memberCount,
  maxMemberCount,
  onClick,
}: CrewItemProps) => {
  return (
    <CrewItemWrapper gap={10} justify="space-between" onClick={onClick}>
      <CrewProfileImage width="82px" src={imgSrc} alt="profile-img" />
      <CrewDescription direction="column" gap={3}>
        <Text size={20} ellipsis={1}>
          {name}
        </Text>
        <Text size={12} ellipsis={1}>
          {address}
        </Text>
        <Flex justify="space-between" align="center">
          <AvatarGroup
            size={30}
            overlap={5}
            border={`1px solid ${theme.PALETTE.GRAY_400}`}
          >
            {membersProfileImageUrls.slice(0, 6).map((url, index) => (
              <Avatar key={index} src={url} />
            ))}
          </AvatarGroup>
          <Text size={12}>{`${memberCount}/${maxMemberCount}`}</Text>
        </Flex>
      </CrewDescription>
    </CrewItemWrapper>
  );
};

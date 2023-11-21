import { Avatar } from '@components/Avatar';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { RankText, RankingItemWrapper } from './RankingItem.styles';
import { getRankingItemBackgroundColor } from './getRankingItemBackgroundColor';

type RankingItemProps = {
  rank: number;
  profilImageUrl: string;
  name: string;
  rating: number;
  onClick: VoidFunction;
};

export const RankingItem = ({
  rank,
  profilImageUrl,
  name,
  rating,
  onClick,
}: RankingItemProps) => {
  return (
    <RankingItemWrapper
      justify="space-between"
      align="center"
      onClick={onClick}
      backgroundColor={getRankingItemBackgroundColor(rank)}
    >
      <Flex align="center" gap={10}>
        <RankText size={14} nowrap>
          {rank}
        </RankText>
        <Avatar size={40} src={profilImageUrl} radius="5px" />
        <Text size={16} weight={700} nowrap>
          {name}
        </Text>
      </Flex>
      <Text size={12} weight={700} color={theme.PALETTE.GRAY_600} nowrap>
        {rating.toLocaleString()}
      </Text>
    </RankingItemWrapper>
  );
};

import styled from '@emotion/styled';

import { MatchItem } from '@components/MatchItem';
import { Text } from '@components/shared/Text';

import { Game } from '@type/models';

import { getGameStartDate } from '@utils/domain';

export const GamesNearInMap = ({ games }: { games: Game[] | null }) => {
  return (
    <PageLayout>
      <PageContent>
        <Text size={20} weight={700}>
          내 근처 게스트 매치
        </Text>
        {games &&
          games.map((game) => {
            const membersProfileImageUrls = game.members.map(
              (member) => member.profileImageUrl
            );
            return (
              <MatchItem
                key={game.id}
                matchId={String(game.id)}
                startTime={getGameStartDate(game.playDate, game.playStartTime)}
                timeMinutes={game.playTimeMinutes}
                mainAddress={game.mainAddress}
                memberCount={game.memberCount}
                maxMemberCount={game.maxMemberCount}
                membersProfileImageUrls={membersProfileImageUrls}
              />
            );
          })}
      </PageContent>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

const PageContent = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { Game } from '@type/models';

import { getGameStartDate } from '@utils/domain';

import { MatchItem } from './MatchItem';

export const GamesNearInMap = ({
  games,
  setCurrentMarkerId,
  setPosition,
}: {
  games: Game[] | null;
  setCurrentMarkerId: (index: number) => void;
  setPosition: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
}) => {
  if (games === null) {
    return <></>;
  }
  return (
    <PageLayout>
      <PageContent>
        <Text size={20} weight={700}>
          내 근처 게스트 매치
        </Text>
        {games && games.length === 0 ? (
          <Flex justify="center" gap={16}>
            <Text size={theme.FONT_SIZE.XS} weight={300}>
              근처에 게스트 매치가 없습니다.
            </Text>
          </Flex>
        ) : (
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
                setCurrentMarkerId={setCurrentMarkerId}
                latitude={game.latitude}
                longitude={game.longitude}
                setPosition={setPosition}
              />
            );
          })
        )}
      </PageContent>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  padding: 0.5rem 1rem 4.375rem 1rem;
  background-color: #f3f4f6;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

const PageContent = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

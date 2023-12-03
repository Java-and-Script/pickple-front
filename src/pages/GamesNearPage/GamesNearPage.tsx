import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { FETCH_SIZE } from '@constants/network';

import { getGameStartDate } from '@utils/domain';

import { PageContent, PageLayout } from './GamesNearPage.styles';
import { useGamesNearPage } from './hooks/useGamesNearPage';

/** TODO: 내 정보에서 주 활동지역을 가져와서 useGamesQuery에 넘겨줘야 함 */
export const GamesNearPage = () => {
  const {
    games,
    isFetchingNextPage,
    lastElementRef,
    titleRef,
    showHeaderTitle,
  } = useGamesNearPage();

  return (
    <PageLayout>
      <Header title={showHeaderTitle ? '내 근처 게스트 매치' : ''} />
      <PageContent>
        <div ref={titleRef}>
          <Text size={20} weight={700}>
            내 근처 게스트 매치
          </Text>
        </div>
        {games.map((game) => {
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
        {isFetchingNextPage && <SkeletonCardList count={FETCH_SIZE} />}
        <div ref={lastElementRef} />
      </PageContent>
    </PageLayout>
  );
};

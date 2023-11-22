import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { useGamesQuery } from '@hooks/queries/useGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { DEFAULT_ADDRESS_DEPTHS } from '@consts/location';
import { FETCH_SIZE } from '@consts/network';

import { getGameStartDate } from '@utils/domain';

import { PageContent, PageLayout } from './GamesNearPage.styles';

/** TODO: 내 정보에서 주 활동지역을 가져와서 useGamesQuery에 넘겨줘야 함 */
export const GamesNearPage = () => {
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const { games, fetchNextPage, isFetchingNextPage } = useGamesQuery({
    category: 'location',
    value: `${
      loginInfo?.addressDepth1 || DEFAULT_ADDRESS_DEPTHS.addressDepth1
    }+${loginInfo?.addressDepth2 || DEFAULT_ADDRESS_DEPTHS.addressDepth2}`,
  });
  const lastElementRef = useInfiniteScroll<HTMLDivElement>(fetchNextPage);

  return (
    <PageLayout>
      <Header title={showHeaderTitle ? '내 근처 게스트 매치' : ''} />
      <PageContent>
        <div ref={entryRef}>
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

import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Text } from '@components/shared/Text';

import { getGameStartDate, isReviewPeriod } from '@utils/domain';

import { PageContent, PageWrapper } from './GamesParticipatePage.styles';
import { useGamesParticipatePage } from './hooks/useGamesParticipatePage';

export const GamesParticipatePage = () => {
  const { titleRef, showHeaderTitle, confirmedGames, navigateToDetailPage } =
    useGamesParticipatePage();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '내가 참여한 매치' : ''} />
      <PageContent direction="column" gap={16}>
        <div ref={titleRef}>
          <Text size={20} weight={700}>
            내가 참여한 게스트 매치
          </Text>
        </div>
        {confirmedGames.map((game) => {
          const membersProfileImageUrls = game.members.map(
            (member) => member.profileImageUrl
          );
          const startTime = getGameStartDate(game.playDate, game.playStartTime);
          const endTimeNumber =
            startTime.getTime() + game.playTimeMinutes * 60000;
          const isMatchEnd = endTimeNumber <= new Date().getTime();
          const canReview =
            isReviewPeriod(
              game.playDate,
              game.playStartTime,
              game.playTimeMinutes
            ) &&
            isMatchEnd &&
            !game.isReviewDone;

          return (
            <MatchItem
              key={game.id}
              matchId={String(game.id)}
              startTime={startTime}
              timeMinutes={game.playTimeMinutes}
              mainAddress={game.mainAddress}
              memberCount={game.memberCount}
              maxMemberCount={game.maxMemberCount}
              membersProfileImageUrls={membersProfileImageUrls}
            >
              {canReview && (
                <MatchItem.BottomButton
                  onClick={() => navigateToDetailPage(game.id)}
                >
                  리뷰 남기기
                </MatchItem.BottomButton>
              )}
            </MatchItem>
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};

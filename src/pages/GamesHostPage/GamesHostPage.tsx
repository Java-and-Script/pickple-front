import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Text } from '@components/shared/Text';

import { PATH_NAME } from '@constants/pathName';

import {
  getGameStartDate,
  isGameEnded,
  isGameStarted,
  isReviewPeriod,
} from '@utils/domain';

import { PageContent, PageWrapper } from './GamesHostPage.styles';
import { useGamesHostPage } from './hooks/useGamesHostPage';

export const GamesHostPage = () => {
  const { entryRef, showHeaderTitle, createdGames, navigate } =
    useGamesHostPage();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '내가 만든 매치' : ''} />
      <PageContent direction="column" gap={16}>
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내가 만든 게스트 매치
          </Text>
        </div>
        {createdGames.map((game) => {
          const membersProfileImageUrls = game.members.map(
            (member) => member.profileImageUrl
          );
          const startTime = getGameStartDate(game.playDate, game.playStartTime);
          const canReview =
            isReviewPeriod(
              game.playDate,
              game.playStartTime,
              game.playTimeMinutes
            ) &&
            isGameEnded(startTime, game.playTimeMinutes) &&
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
              {!isGameStarted(startTime) && (
                <MatchItem.BottomButton
                  onClick={() =>
                    navigate(PATH_NAME.GET_GAMES_MANAGE_PATH(String(game.id)))
                  }
                >
                  매치 관리
                </MatchItem.BottomButton>
              )}
              {canReview && (
                <MatchItem.BottomButton
                  onClick={() =>
                    navigate(PATH_NAME.GET_GAMES_REVIEW_PATH(String(game.id)))
                  }
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

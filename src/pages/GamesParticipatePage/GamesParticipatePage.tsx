import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Text } from '@components/shared/Text';

import { useConfirmGamesQuery } from '@hooks/queries/useConfirmGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import { getGameStartDate } from '@utils/domain';

import { PageContent, PageWrapper } from './GamesParticipatePage.styles';

export const GamesParticipatePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const { data: confirmedGames } = useConfirmGamesQuery({
    memberId: loginInfo.id,
  });

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '내가 참여한 매치' : ''} />
      <PageContent direction="column" gap={16}>
        <div ref={entryRef}>
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
              {isMatchEnd && (
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

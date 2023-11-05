import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Text } from '@components/shared/Text';

import { useCreatedGamesQuery } from '@hooks/queries/useCreatedGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { Member } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

import { getGameStartDate } from '@utils/domain';

import { PageContent, PageWrapper } from './GamesHostPage.styles';

const getMyInfo = (): Member | null => {
  const json = localStorage.getItem('USER_INFO');
  if (!json) {
    return null;
  }
  return JSON.parse(json);
};

export const GamesHostPage = () => {
  const myInfo = getMyInfo();
  if (!myInfo) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const { data: createdGames } = useCreatedGamesQuery({ memberId: myInfo.id });

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '내가 만든 게스트 매치' : ''} />
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
          const isMatchNotStarted = startTime.getTime() <= new Date().getTime();

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
              {!isMatchNotStarted && (
                <MatchItem.BottomButton
                  onClick={() =>
                    navigate(PATH_NAME.GET_GAMES_MANAGE_PATH(String(game.id)))
                  }
                >
                  매치 관리
                </MatchItem.BottomButton>
              )}
            </MatchItem>
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};
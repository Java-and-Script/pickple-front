import { useNavigate } from 'react-router-dom';

import { RankingHeader } from '@pages/CrewsRankingPage/CrewsRankingPage.styles';
import { RankingItem } from '@pages/CrewsRankingPage/components/RankingItem';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useCrewsRankingQuery } from '@hooks/queries/useCrewsRankingQuery';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import { getGameStartDate } from '@utils/domain';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';
import { MainPageNoContentItem } from './MainPageNoContentItem';
import { useMainPageNearCrewListQuery } from './useMainPageNearCrewListQuery';
import { useMainPageNearGamesQuery } from './useMainPageNearGamesQuery';

export const MainPage = () => {
  const navigate = useNavigate();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const addressDepth1 = loginInfo?.addressDepth1 ?? '서울시';
  const addressDepth2 = loginInfo?.addressDepth2 ?? '강남구';

  const { data: gameData } = useMainPageNearGamesQuery({
    category: 'location',
    value: `${addressDepth1}+${addressDepth2}`,
  });

  const { data: crewData } = useMainPageNearCrewListQuery({
    addressDepth1,
    addressDepth2,
  });

  const { data: crewsRanking } = useCrewsRankingQuery();
  const slicedCrewsRanking = crewsRanking.slice(0, 3);

  const filteredGameData = gameData.map(
    ({
      id,
      playDate,
      playStartTime,
      playTimeMinutes,
      mainAddress,
      memberCount,
      maxMemberCount,
      members,
    }) => (
      <MatchItem
        key={id.toString()}
        matchId={id.toString()}
        startTime={getGameStartDate(playDate, playStartTime)}
        timeMinutes={playTimeMinutes}
        mainAddress={mainAddress}
        memberCount={memberCount}
        maxMemberCount={maxMemberCount}
        membersProfileImageUrls={members.map(
          ({ profileImageUrl }) => profileImageUrl
        )}
      />
    )
  );

  const filteredCrewData = crewData.map(
    ({
      id,
      name,
      addressDepth1,
      addressDepth2,
      profileImageUrl,
      members,
      memberCount,
      maxMemberCount,
    }) => (
      <CrewItem
        key={id.toString()}
        name={name}
        address={`${addressDepth1} ${addressDepth2}`}
        imgSrc={profileImageUrl}
        membersProfileImageUrls={members.map(
          ({ profileImageUrl }) => profileImageUrl
        )}
        memberCount={memberCount}
        maxMemberCount={maxMemberCount}
        onClick={() => navigate(PATH_NAME.GET_CREWS_PATH(id.toString()))}
      />
    )
  );

  return (
    <MainPageContainer>
      <Header isLogo={true} />
      <MainPageSubContainer>
        <Text children={'내 근처 게스트 매치'} weight={700} size={'1.25rem'} />
        {filteredGameData.length === 0 ? (
          <MainPageNoContentItem
            name={'GAME'}
            onClick={() => navigate(PATH_NAME.CREATE_GAME)}
          />
        ) : (
          filteredGameData
        )}
        {filteredGameData.length === 0 || filteredGameData.length === 1 ? (
          <Button
            {...MAIN_PAGE_BUTTON_PROP}
            onClick={() => navigate(PATH_NAME.MAP)}
          >
            다른 지역 게스트 매치 보러가기
          </Button>
        ) : (
          <Button
            {...MAIN_PAGE_BUTTON_PROP}
            onClick={() => navigate(PATH_NAME.GAMES_NEAR)}
          >
            더보기
          </Button>
        )}
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'크루 랭킹'} weight={700} size={'1.25rem'} />
        <RankingHeader justify="space-between">
          <Flex gap={55}>
            <Text size={14} nowrap>
              순위
            </Text>
            <Text size={14} nowrap>
              크루 이름
            </Text>
          </Flex>
          <Text size={14} nowrap>
            점수
          </Text>
        </RankingHeader>
        {slicedCrewsRanking.map((crewRank) => (
          <RankingItem
            key={crewRank.id}
            rank={crewRank.rank}
            name={crewRank.name}
            profilImageUrl={crewRank.profileImageUrl}
            rating={crewRank.totalScore}
            onClick={() =>
              navigate(PATH_NAME.GET_CREWS_PATH(String(crewRank.id)))
            }
          />
        ))}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.CREWS_RANKING)}
        >
          전체 크루 랭킹 보기
        </Button>
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
        {filteredCrewData.length === 0 ? (
          <MainPageNoContentItem
            name={'CREW'}
            onClick={() => navigate(PATH_NAME.CREATE_CREW)}
          />
        ) : (
          filteredCrewData
        )}
        {filteredCrewData.length !== 0 && (
          <Button
            {...MAIN_PAGE_BUTTON_PROP}
            onClick={() => navigate(PATH_NAME.CREWS_RECOMMEND)}
          >
            더보기
          </Button>
        )}
      </MainPageSubContainer>
    </MainPageContainer>
  );
};

const MAIN_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '3.5rem',
  fontSize: `${theme.FONT_SIZE.LG}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};

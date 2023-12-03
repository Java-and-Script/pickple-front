import { RankingHeader } from '@pages/CrewsRankingPage/CrewsRankingPage.styles';
import { RankingItem } from '@pages/CrewsRankingPage/components/RankingItem';

import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@constants/pathName';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';
import { MainPageNoContentItem } from './components/MainPageNoContentItem';
import { useMainPage } from './hooks/useMainPage';

export const MainPage = () => {
  const { navigate, slicedCrewsRanking, filteredGameData, filteredCrewData } =
    useMainPage();

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
            profileImageUrl={crewRank.profileImageUrl}
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
  height: '2.5rem',
  fontSize: `${theme.FONT_SIZE.MD}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};

import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import { getGameStartDate } from '@utils/domain';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';
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
        {filteredGameData}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.GAMES_NEAR)}
        >
          더보기
        </Button>
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
        {filteredCrewData}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.CREWS_RECOMMEND)}
        >
          더보기
        </Button>
      </MainPageSubContainer>
    </MainPageContainer>
  );
};

const MAIN_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '3.5rem',
  text: '더보기',
  fontSize: `${theme.FONT_SIZE.LG}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};

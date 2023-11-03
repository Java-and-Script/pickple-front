import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';
import { useMainPageNearGamesQuery } from './useMainPageNearGamesQuery';

export const MainPage = () => {
  const navigate = useNavigate();

  const { data } = useMainPageNearGamesQuery({
    category: 'location',
    value: '서울시+영등포구',
  });

  const filteredData = data.map(
    ({
      id,
      //playStartTime,
      playTimeMinutes,
      mainAddress,
      memberCount,
      maxMemberCount,
      members,
    }) => (
      <MatchItem
        key={id.toString()}
        matchId={id.toString()}
        startTime={new Date()}
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

  return (
    <MainPageContainer>
      <Header isLogo={true} />
      <MainPageSubContainer>
        <Text children={'내 근처의 경기'} weight={700} size={'1.25rem'} />
        {filteredData}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          onClick={() => navigate(PATH_NAME.GAMES_NEAR)}
        >
          더보기
        </Button>
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
        {filteredData}
        <Button {...MAIN_PAGE_BUTTON_PROP} onClick={() => console.log('hi')}>
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

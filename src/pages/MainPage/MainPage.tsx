import { useNavigate } from 'react-router-dom';

import { Button } from '@components/shared/Button';
import { Header } from '@components/shared/Header';
import { MatchItem } from '@components/shared/MatchItem';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainPageContainer>
      <Header isLogo={true} />
      <MainPageSubContainer>
        <Text children={'내 근처의 경기'} weight={700} size={'1.25rem'} />
        {serverMatchItemList.map(
          ({
            matchId,
            startTime,
            timeMinutes,
            mainAddress,
            memberCount,
            maxMemberCount,
            membersProfileImageUrls,
          }) => (
            <MatchItem
              key={matchId}
              matchId={matchId}
              startTime={startTime}
              timeMinutes={timeMinutes}
              mainAddress={mainAddress}
              memberCount={memberCount}
              maxMemberCount={maxMemberCount}
              membersProfileImageUrls={membersProfileImageUrls}
            />
          )
        )}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          handleClick={() => navigate(PATH_NAME.GAMES_NEAR)}
        ></Button>
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
        {serverMatchItemList.map(
          ({
            matchId,
            startTime,
            timeMinutes,
            mainAddress,
            memberCount,
            maxMemberCount,
            membersProfileImageUrls,
          }) => (
            <MatchItem
              key={matchId}
              matchId={matchId}
              startTime={startTime}
              timeMinutes={timeMinutes}
              mainAddress={mainAddress}
              memberCount={memberCount}
              maxMemberCount={maxMemberCount}
              membersProfileImageUrls={membersProfileImageUrls}
            />
          )
        )}
        <Button
          {...MAIN_PAGE_BUTTON_PROP}
          handleClick={() => console.log('hi')}
        ></Button>
      </MainPageSubContainer>
    </MainPageContainer>
  );
};

const serverMatchItemList = [
  {
    matchId: '1',
    startTime: new Date(),
    timeMinutes: 60,
    mainAddress: '',
    memberCount: 2,
    maxMemberCount: 8,
    membersProfileImageUrls: [
      'https://picsum.photos/500',
      'https://picsum.photos/500',
    ],
  },
  {
    matchId: '2',
    startTime: new Date(),
    timeMinutes: 60,
    mainAddress: '',
    memberCount: 2,
    maxMemberCount: 8,
    membersProfileImageUrls: [
      'https://picsum.photos/500',
      'https://picsum.photos/500',
    ],
  },
  {
    matchId: '3',
    startTime: new Date(),
    timeMinutes: 60,
    mainAddress: '',
    memberCount: 2,
    maxMemberCount: 8,
    membersProfileImageUrls: [
      'https://picsum.photos/500',
      'https://picsum.photos/500',
    ],
  },
];

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

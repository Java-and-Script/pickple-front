import { useNavigate } from 'react-router-dom';

import { Authenticated, Registration } from '@/type/models';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { MatchItem } from '@components/MatchItem';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';
import { useMainPageNearCrewListQuery } from './useMainPageNearCrewListQuery';
import { useMainPageNearGamesQuery } from './useMainPageNearGamesQuery';

export const MainPage = () => {
  const navigate = useNavigate();
  const localStorageInfo = localStorage.getItem('LOGIN_INFO');
  const loginInfo: Registration | Authenticated =
    localStorageInfo !== null
      ? JSON.parse(localStorageInfo)
      : {
          accessToken:
            'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk4NTA1NzM2LCJleHAiOjE2OTg1MDU4NTZ9.E0p1V4PiBDmZIZqglGjQFWh-bgbA7n7qryYnOZ3cxMuaBvp-ejkXC2b-bA5kDjZrlzyyiWuTwe-sbYk73tIR0w',
          refreshToken: null,
          id: null,
          nickname: '창현',
          profileImageUrl:
            'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
          email: 'changhyeon.h@kakao.com',
          oauthId: 32014123,
          oauthProvider: 'KAKAO',
          addressDepth1: null,
          addressDepth2: null,
        };

  const { addressDepth1, addressDepth2 } = loginInfo;
  const { data: gameData } = useMainPageNearGamesQuery({
    category: 'location',
    value:
      addressDepth1 === null ? '서울시+강남구' : addressDepth2 + addressDepth2,
  });

  const { data: crewData } = useMainPageNearCrewListQuery({
    addressDepth1: addressDepth1 === null ? '서울시' : addressDepth1,
    addressDepth2: addressDepth2 === null ? '영등포구' : addressDepth2,
  });

  const filteredGameData = gameData.map(
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

  console.log(crewData);

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
        <Text children={'내 근처의 경기'} weight={700} size={'1.25rem'} />
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

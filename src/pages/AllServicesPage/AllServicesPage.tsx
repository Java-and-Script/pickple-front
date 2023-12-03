import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@constants/pathName';

import Ball from '@assets/ball.svg?react';
import Chat from '@assets/chat.svg?react';
import CrewManage from '@assets/crewManage.svg?react';
import CrewMember from '@assets/crewMember.svg?react';
import Exit from '@assets/exit.svg?react';
import Foot from '@assets/foot.svg?react';
import Map from '@assets/map.svg?react';
import Medal from '@assets/medal.svg?react';
import Pen from '@assets/pen.svg?react';
import Profile from '@assets/profile.svg?react';
import Social from '@assets/social.svg?react';
import Star from '@assets/star.svg?react';
import Whistle from '@assets/whistle.svg?react';

import {
  AllServicesContainer,
  FieldContainer,
  Main,
} from './AllServicesPage.style';
import { MenuItem } from './components/MenuItem';
import { useAllServicesPage } from './hooks/useAllServicesPage';

export const AllServicesPage = () => {
  const { myId, moveToPage, logout } = useAllServicesPage();

  return (
    <AllServicesContainer>
      <Header isLogo={true} isRightContainer={true} />
      <Main>
        <Text size="1.2rem" weight={700}>
          전체 서비스
        </Text>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            메인
          </Text>
          <MenuItem
            icon={<Map />}
            pageName="지도"
            onClickMenuItem={() => moveToPage(PATH_NAME.MAP)}
          />
          <MenuItem
            icon={<Pen />}
            pageName="글쓰기"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREATE)}
          />
          <MenuItem
            icon={<Chat />}
            pageName="채팅"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.CHAT)}
          />
          <MenuItem
            icon={<Profile />}
            pageName="내 정보"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => {
              myId && moveToPage(PATH_NAME.GET_PROFILE_PATH(myId));
            }}
          />

          <MenuItem
            icon={<Social />}
            color={theme.PALETTE.GRAY_300}
            pageName="소셜링"
          />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            게스트 매치
          </Text>
          <MenuItem
            icon={<Pen />}
            pageName="게스트 모집하기"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREATE_GAME)}
          />
          <MenuItem
            icon={<Foot />}
            pageName="내 근처 게스트 매치"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.GAMES_NEAR)}
          />
          <MenuItem
            icon={<Ball />}
            pageName="내가 참여한 게스트 매치"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.GAMES_PARTICIPATE)}
          />
          <MenuItem
            icon={<Whistle />}
            pageName="내가 만든 게스트 매치"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.GAMES_HOST)}
          />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            크루
          </Text>
          <MenuItem
            icon={<Pen />}
            pageName="크루 만들기"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREATE_CREW)}
          />
          <MenuItem
            icon={<Star />}
            pageName="추천 크루"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREWS_RECOMMEND)}
          />
          <MenuItem
            icon={<CrewManage />}
            pageName="내가 속한 크루"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.CREWS_PARTICIPATE)}
          />
          <MenuItem
            icon={<CrewMember />}
            pageName="내가 만든 크루"
            color={myId ? null : theme.PALETTE.GRAY_300}
            onClickMenuItem={() => moveToPage(PATH_NAME.CREWS_CHIEF)}
          />
          <MenuItem
            icon={<Medal />}
            pageName="크루 랭킹"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREWS_RANKING)}
          />
        </FieldContainer>
        {myId && (
          <FieldContainer>
            <Text size="1rem" weight={700}>
              설정
            </Text>
            <MenuItem
              icon={<Exit />}
              pageName="로그아웃"
              onClickMenuItem={logout}
            />
          </FieldContainer>
        )}
      </Main>
    </AllServicesContainer>
  );
};

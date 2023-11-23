import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '@api/axiosInstance';

import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import Ball from '@assets/ball.svg?react';
import Chat from '@assets/chat.svg?react';
import CrewManage from '@assets/crewManage.svg?react';
import CrewMember from '@assets/crewMember.svg?react';
import Exit from '@assets/exit.svg?react';
import Map from '@assets/map.svg?react';
import Medal from '@assets/medal.svg?react';
import Pen from '@assets/pen.svg?react';
import Profile from '@assets/profile.svg?react';
import Social from '@assets/social.svg?react';
import Whistle from '@assets/whistle.svg?react';

import {
  AllServicesContainer,
  FieldContainer,
  Main,
} from './AllServicesPage.style';
import { MenuItem } from './MenuItem';

export const AllServicesPage = () => {
  const { loginInfo, setLoginInfo } = useLoginInfoStore();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const myId = loginInfo?.id ? String(loginInfo?.id) : null;

  const navigate = useNavigate();

  const moveToPage = (pathName: string) => {
    navigate(pathName);
  };

  const logout = () => {
    if (myId) {
      axiosInstance.delete('/auth/logout').finally(() => {
        setLoginInfo(null);
        setAccessToken(null);
        location.href = '/';
      });
    }
  };

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
            pageName="메세지"
            onClickMenuItem={() => moveToPage(PATH_NAME.CHAT)}
          />
          <MenuItem
            icon={<Profile />}
            pageName="내 정보"
            onClickMenuItem={() =>
              myId && moveToPage(PATH_NAME.GET_PROFILE_PATH(myId))
            }
          />
          <MenuItem icon={<Social />} pageName="소셜링" />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            경기
          </Text>
          <MenuItem
            icon={<Ball />}
            pageName="내가 참여한 게스트 매치"
            onClickMenuItem={() =>
              myId && moveToPage(PATH_NAME.GAMES_PARTICIPATE)
            }
          />
          <MenuItem
            icon={<Whistle />}
            pageName="내가 만든 게스트 매치"
            onClickMenuItem={() => myId && moveToPage(PATH_NAME.GAMES_HOST)}
          />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            크루
          </Text>
          <MenuItem
            icon={<CrewManage />}
            pageName="내가 속한 크루"
            onClickMenuItem={() =>
              myId && moveToPage(PATH_NAME.CREWS_PARTICIPATE)
            }
          />
          <MenuItem
            icon={<CrewMember />}
            pageName="내가 만든 크루"
            onClickMenuItem={() => myId && moveToPage(PATH_NAME.CREWS_CHIEF)}
          />
          <MenuItem
            icon={<Medal />}
            pageName="크루 랭킹"
            onClickMenuItem={() => moveToPage(PATH_NAME.CREWS_RANKING)}
          />
        </FieldContainer>
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
      </Main>
    </AllServicesContainer>
  );
};

import { ReactNode } from 'react';

import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

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
  Item,
  Main,
} from './AllServicesPage.style';

type MenuItemProps = {
  icon: ReactNode;
  pageName: string;
};
const MenuItem = ({ icon, pageName }: MenuItemProps) => {
  return (
    <Item>
      {icon}
      <Text size="1rem" weight={500}>
        {pageName}
      </Text>
    </Item>
  );
};
export const AllServicesPage = () => {
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
          <MenuItem icon={<Map />} pageName="지도" />
          <MenuItem icon={<Pen />} pageName="글쓰기" />
          <MenuItem icon={<Chat />} pageName="메세지" />
          <MenuItem icon={<Profile />} pageName="내 정보" />
          <MenuItem icon={<Social />} pageName="소셜링" />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            경기
          </Text>
          <MenuItem icon={<Ball />} pageName="게스트로 참가한 경기 목록" />
          <MenuItem icon={<Whistle />} pageName="내가 만든 경기 목록" />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            크루
          </Text>
          <MenuItem icon={<CrewManage />} pageName="내가 속한 크루 목록" />
          <MenuItem icon={<CrewMember />} pageName="내가 만든 크루 관리" />
          <MenuItem icon={<Medal />} pageName="크루 랭킹" />
        </FieldContainer>
        <FieldContainer>
          <Text size="1rem" weight={700}>
            설정
          </Text>
          <MenuItem icon={<Exit />} pageName="로그아웃" />
        </FieldContainer>
      </Main>
    </AllServicesContainer>
  );
};

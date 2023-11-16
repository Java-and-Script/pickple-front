import { useState } from 'react';

import { Header } from '@components/Header';

import {
  Main,
  MessageContainer,
  TabBar,
  TabBarButton,
} from './MessagePage.style.ts';
import { MessageRoom } from './MessageRoom.tsx';

const TEMP_TAB_TITLE = { ONE_TO_ONE: 'one', GROUP: 'crew, game' };

export type MessageRoomInfo = {
  nickname: string;
  content: string;
  date: string;
  img: string;
  type: string;
};

export const MessagePage = () => {
  const [selectedTab, setSelectedTab] = useState(TEMP_TAB_TITLE.GROUP);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <MessageContainer>
      <Header isLogo={false} title="메세지" isRightContainer={true} />
      <Main>
        <TabBar>
          <TabBarButton
            onClick={() => handleTabClick(TEMP_TAB_TITLE.ONE_TO_ONE)}
            isSelected={selectedTab === TEMP_TAB_TITLE.ONE_TO_ONE}
          >
            일대일
          </TabBarButton>
          <TabBarButton
            onClick={() => handleTabClick(TEMP_TAB_TITLE.GROUP)}
            isSelected={selectedTab === TEMP_TAB_TITLE.GROUP}
          >
            그룹
          </TabBarButton>
        </TabBar>
        {data
          .filter(({ type }) => selectedTab.includes(type))
          .map((messageRoom, i) => (
            <MessageRoom messageRoom={messageRoom} key={i} />
          ))}
      </Main>
    </MessageContainer>
  );
};

const data: MessageRoomInfo[] = [
  {
    nickname: '11.16 용산구',
    content: '아아아아아아',
    date: '2023년 11월 16일',
    img: 'https://velog.velcdn.com/images/sharphand1/post/e7f981a1-fe04-4687-800a-f7e411e6abff/image.png',
    type: 'game',
  },
  {
    nickname: '크크루루',
    content: '아아아아아아',
    date: '2023년 11월 16일',
    img: 'https://velog.velcdn.com/images/sharphand1/post/e7f981a1-fe04-4687-800a-f7e411e6abff/image.png',
    type: 'crew',
  },
  {
    nickname: '강원지',
    content: '아아아아아아',
    date: '2023년 11월 16일',
    img: 'https://velog.velcdn.com/images/sharphand1/post/e7f981a1-fe04-4687-800a-f7e411e6abff/image.png',
    type: 'one',
  },
];

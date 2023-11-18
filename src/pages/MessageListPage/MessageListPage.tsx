import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';

import { PATH_NAME } from '@consts/pathName.ts';

import { MessageItem } from './MessageItem.tsx';
import {
  Main,
  MessageContainer,
  TabBar,
  TabBarButton,
} from './MessageListPage.style.ts';

const TEMP_TAB_TITLE = { ONE_TO_ONE: 'one', GROUP: 'crew, game' };

export type MessageItemInfo = {
  nickname: string;
  content: string;
  date: string;
  img: string;
  type: string;
};

export const MessageListPage = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(TEMP_TAB_TITLE.GROUP);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const moveToPage = (pathName: string) => {
    navigate(pathName);
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
          .map((messageItem, i) => (
            <MessageItem
              messageItem={messageItem}
              key={i}
              onClickMessage={() => moveToPage(PATH_NAME.GET_MESSAGE_PATH('1'))}
            />
          ))}
      </Main>
    </MessageContainer>
  );
};

const data: MessageItemInfo[] = [
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

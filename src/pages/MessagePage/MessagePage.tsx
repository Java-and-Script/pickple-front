import { useState } from 'react';

import { Header } from '@components/Header';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { getGameStartDate, isGameEnded } from '@utils/domain.ts';

import {
  DateText,
  Main,
  MessageContainer,
  MessageItemAvatar,
  MessageMatchDuration,
  MessageMatchStartTime,
  MessageMatchStatus,
  MessageRoomItem,
  Nickname,
  TabBar,
  TabBarButton,
} from './MessagePage.style.ts';

const TEMP_TAB_TITLE = { ONE_TO_ONE: 'one', GROUP: 'crew, game' };

type MessageRoom = {
  nickname: string;
  content: string;
  date: string;
  img: string;
  type: string;
};

const MessageRoom = ({ messageRoom }: { messageRoom: MessageRoom }) => {
  const { nickname, content, date, img, type } = messageRoom;
  const startTime = getGameStartDate('2023-12-01', '11:30');

  return (
    <MessageRoomItem justify="space-between">
      <Flex gap={8}>
        {type === 'game' ? (
          <MessageMatchStatus>
            {isGameEnded(startTime, 90) ? (
              <MessageMatchStartTime>종료</MessageMatchStartTime>
            ) : (
              <>
                <MessageMatchStartTime>
                  {`${startTime.toTimeString().slice(0, 5)}`}
                </MessageMatchStartTime>
                <MessageMatchDuration>{`${90 / 60}h`}</MessageMatchDuration>
              </>
            )}
          </MessageMatchStatus>
        ) : (
          <MessageItemAvatar width="40" alt="avatar" src={img} />
        )}
        <Flex direction="column">
          <Nickname size={12} weight={500} ellipsis={1}>
            {nickname}
          </Nickname>
          <Text size={12} weight={300} ellipsis={1}>
            {content}
          </Text>
        </Flex>
      </Flex>
      <DateText size={8} color={theme.PALETTE.GRAY_500}>
        {date}
      </DateText>
    </MessageRoomItem>
  );
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
          {Object.values(TEMP_TAB_TITLE).map((tabTitle) => (
            <TabBarButton
              key={tabTitle}
              onClick={() => handleTabClick(tabTitle)}
              isSelected={selectedTab === tabTitle}
            >
              {tabTitle === TEMP_TAB_TITLE.ONE_TO_ONE ? '일대일' : '그룹'}
            </TabBarButton>
          ))}
        </TabBar>
        {data
          .filter(({ type }) => selectedTab.includes(type))
          .map((messageRoom) => (
            <MessageRoom messageRoom={messageRoom} />
          ))}
      </Main>
    </MessageContainer>
  );
};

const data: MessageRoom[] = [
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

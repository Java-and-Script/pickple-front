import { Suspense } from 'react';

import { Header } from '@components/Header';
import { Flex } from '@components/shared/Flex';

import { CHAT_ROOM_TAB_TITLE } from '@constants/chat.ts';

import {
  Main,
  MessagePageContainer,
  TabBarButton,
} from './ChatRoomListPage.style.ts';
import { ChatRoomList } from './components/ChatRoomList.tsx';
import { useChatRoomListPage } from './hooks/useChatRoomListPage.ts';
import { ChatRoomListSkeleton } from './skeletons/ChatRoomListSkeleton.tsx';

export const ChatRoomListPage = () => {
  const { chatRoomTab, setChatRoomTab } = useChatRoomListPage();

  return (
    <MessagePageContainer>
      <Header isLogo={false} title="채팅" isRightContainer={true} />
      <Main>
        <Flex>
          {Object.values(CHAT_ROOM_TAB_TITLE).map((tab) => (
            <TabBarButton
              onClick={() => setChatRoomTab(tab)}
              isSelected={chatRoomTab === tab}
              key={tab}
            >
              {tab}
            </TabBarButton>
          ))}
        </Flex>
        <Suspense fallback={<ChatRoomListSkeleton />}>
          <ChatRoomList />
        </Suspense>
      </Main>
    </MessagePageContainer>
  );
};

import { Suspense } from 'react';

import { Header } from '@components/Header';
import { Flex } from '@components/shared/Flex';

import { useChatRoomTabStore } from '@stores/chatRoomTab.store.ts';

import { CHAT_ROOM_TAB_TITLE } from '@consts/chat.ts';

import { ChatRoomList } from './ChatRoomList.tsx';
import {
  Main,
  MessagePageContainer,
  TabBarButton,
} from './ChatRoomListPage.style.ts';
import { SkeletonChatRoomList } from './SkeletonChatRoomList.tsx';

export const ChatRoomListPage = () => {
  const { chatRoomTab, setChatRoomTab } = useChatRoomTabStore();

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
        <Suspense fallback={<SkeletonChatRoomList />}>
          <ChatRoomList />
        </Suspense>
      </Main>
    </MessagePageContainer>
  );
};

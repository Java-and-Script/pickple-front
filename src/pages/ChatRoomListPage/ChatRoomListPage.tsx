import { Suspense } from 'react';

import { Header } from '@components/Header';

import { useChatRoomTabStore } from '@stores/chatRoomTab.store.ts';

import { CHAT_ROOM_TAB_TITLE } from '@consts/chatRoomTabTitle.ts';

import { ChatRoomList } from './ChatRoomList.tsx';
import {
  Main,
  MessagePageContainer,
  TabBar,
  TabBarButton,
} from './ChatRoomListPage.style.ts';
import { SkeletonChatRoomList } from './SkeletonChatRoomList.tsx';

export const ChatRoomListPage = () => {
  const { chatRoomTab, setChatRoomTab } = useChatRoomTabStore();

  return (
    <MessagePageContainer>
      <Header isLogo={false} title="채팅" isRightContainer={true} />
      <Main>
        <TabBar>
          {Object.values(CHAT_ROOM_TAB_TITLE).map((tab) => (
            <TabBarButton
              onClick={() => setChatRoomTab(tab)}
              isSelected={chatRoomTab === tab}
              key={tab}
            >
              {tab}
            </TabBarButton>
          ))}
        </TabBar>
        <Suspense fallback={<SkeletonChatRoomList />}>
          <ChatRoomList />
        </Suspense>
      </Main>
    </MessagePageContainer>
  );
};

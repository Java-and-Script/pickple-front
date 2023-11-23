import { Header } from '@components/Header';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme.ts';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { CHAT_ROOM_TAB_TITLE } from '@consts/chatRoomTabTitle.ts';
import { PATH_NAME } from '@consts/pathName.ts';

import { ChatRoomItem } from './ChatRoomItem.tsx';
import {
  InformText,
  Main,
  MessagePageContainer,
  TabBar,
  TabBarButton,
} from './ChatRoomListPage.style.ts';
import { useChatRoomListPage } from './useChatRoomListPage.ts';

export const ChatRoomListPage = () => {
  const { selectedTabChatRoomList, chatRoomTab, moveToPage, handleClickTab } =
    useChatRoomListPage();

  return (
    <MessagePageContainer>
      <Header isLogo={false} title="채팅" isRightContainer={true} />
      <Main>
        <TabBar>
          {Object.values(CHAT_ROOM_TAB_TITLE).map((tab) => (
            <TabBarButton
              onClick={() => handleClickTab(tab)}
              isSelected={chatRoomTab === tab}
              key={tab}
            >
              {tab}
            </TabBarButton>
          ))}
        </TabBar>
        {selectedTabChatRoomList.length !== 0 ? (
          selectedTabChatRoomList.map((chatRoomItem: ChatRoom) => (
            <ChatRoomItem
              chatRoomItem={chatRoomItem}
              key={chatRoomItem.id}
              onClickChatRoomItem={() =>
                moveToPage(PATH_NAME.GET_CHAT_PATH(String(chatRoomItem.id)))
              }
            />
          ))
        ) : (
          <Flex justify="center" gap={16}>
            <InformText size={theme.FONT_SIZE.XS} weight={300}>
              채팅 내역이 없습니다.
            </InformText>
          </Flex>
        )}
      </Main>
    </MessagePageContainer>
  );
};

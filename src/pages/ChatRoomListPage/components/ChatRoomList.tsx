import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme.ts';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { PATH_NAME } from '@constants/pathName.ts';

import { InformText } from '../ChatRoomListPage.style.ts';
import { useChatRoomList } from '../hooks/useChatRoomList.ts';
import { ChatRoomItem } from './ChatRoomItem.tsx';

export const ChatRoomList = () => {
  const { selectedTabChatRoomList, moveToPage } = useChatRoomList();

  return (
    <>
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
    </>
  );
};

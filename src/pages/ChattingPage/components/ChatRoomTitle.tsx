import { ChatRoomDetail } from '@type/models/ChatRoom';

import { CHAT_ROOM_TAB_TITLE } from '@constants/chat';
import { PATH_NAME } from '@constants/pathName';

import { Pointer } from '../ChattingPage.style';

export const ChatRoomTitle = ({
  type,
  domainId,
  roomName,
  onClick: moveToPage,
}: Pick<ChatRoomDetail, 'type' | 'domainId' | 'roomName'> & {
  onClick: (path: string) => void;
}) => {
  const titlePagePath = getTitlePagePath(type);

  return (
    <Pointer onClick={() => moveToPage(titlePagePath(String(domainId)))}>
      {roomName}
    </Pointer>
  );
};

const getTitlePagePath = (roomType: string) => {
  if (roomType === CHAT_ROOM_TAB_TITLE.INDIVIDUAL) {
    return PATH_NAME.GET_PROFILE_PATH;
  }

  if (roomType === CHAT_ROOM_TAB_TITLE.GUEST) {
    return PATH_NAME.GET_GAMES_PATH;
  }

  return PATH_NAME.GET_CREWS_PATH;
};

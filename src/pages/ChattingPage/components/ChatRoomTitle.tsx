import { ChatRoomDetail } from '@type/models/ChatRoom';

import { RoomNameWrapper } from '../ChattingPage.style';
import { PAGE_PATH_BY_ROOM_TYPE } from '../constants/chatRoomTypeOptions';

type ChatRoomTitleProps = Pick<
  ChatRoomDetail,
  'type' | 'domainId' | 'roomName'
> & {
  onClick: (path: string) => void;
};

export const ChatRoomTitle = ({
  type: roomType,
  domainId,
  roomName,
  onClick: moveToPage,
}: ChatRoomTitleProps) => {
  const path = PAGE_PATH_BY_ROOM_TYPE[roomType](String(domainId));

  return (
    <RoomNameWrapper onClick={() => moveToPage(path)}>
      {roomName}
    </RoomNameWrapper>
  );
};

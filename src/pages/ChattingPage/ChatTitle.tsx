import { ChatRoomDetail } from '@type/models/ChatRoom';

import { Pointer } from './ChattingPage.style';
import { getTitlePagePath } from './getTitlePagePath.service';

export const ChatTitle = ({
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

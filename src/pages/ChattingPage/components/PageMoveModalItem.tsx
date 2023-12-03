import { ChatRoom } from '@type/models/ChatRoom';

import { ModalItem } from '../ChattingPage.style';
import {
  PAGE_MOVE_MODAL_ITEM_TITLE,
  PAGE_PATH_BY_ROOM_TYPE,
} from '../constants/chatRoomTypeOptions';

type PageMoveModalItem = Pick<ChatRoom, 'type' | 'id'> & {
  onClick: (id: string) => void;
};

export const PageMoveModalItem = ({
  type: roomType,
  id: domainId,
  onClick: moveToPage,
}: PageMoveModalItem) => {
  const title = PAGE_MOVE_MODAL_ITEM_TITLE[roomType];

  const path = PAGE_PATH_BY_ROOM_TYPE[roomType](String(domainId));

  return <ModalItem onClick={() => moveToPage(path)}>{title}</ModalItem>;
};

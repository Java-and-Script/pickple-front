import { ChatRoom } from '@type/models/ChatRoom';

import { PATH_NAME } from '@constants/pathName';

export const PAGE_MOVE_MODAL_ITEM_TITLE: Record<ChatRoom['type'], string> = {
  개인: '상대방 프로필 페이지로 이동하기',
  게스트: '게스트 모집글 페이지로 이동하기',
  크루: '크루 상세 페이지로 이동하기',
};

export const PAGE_PATH_BY_ROOM_TYPE: Record<
  ChatRoom['type'],
  (id: string) => string
> = {
  개인: PATH_NAME.GET_PROFILE_PATH,
  게스트: PATH_NAME.GET_GAMES_PATH,
  크루: PATH_NAME.GET_CREWS_PATH,
};

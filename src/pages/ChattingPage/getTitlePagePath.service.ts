import { CHAT_ROOM_TAB_TITLE } from '@consts/chat';
import { PATH_NAME } from '@consts/pathName';

export const getTitlePagePath = (roomType: string) => {
  if (roomType === CHAT_ROOM_TAB_TITLE.INDIVIDUAL) {
    return PATH_NAME.GET_PROFILE_PATH;
  }

  if (roomType === CHAT_ROOM_TAB_TITLE.GUEST) {
    return PATH_NAME.GET_GAMES_PATH;
  }

  return PATH_NAME.GET_CREWS_PATH;
};

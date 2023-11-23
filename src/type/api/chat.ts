import { ChatMessage } from '@type/models/ChatMessage';
import { ChatRoom, ChatRoomDetail } from '@type/models/ChatRoom';

export type PostCreatePersonalChatRoomRequest = {
  receiverId: number;
};

export type PostCreatePersonalChatRoomResponse = ChatRoomDetail;

export type GetPersonalChatRoomExistedRequest = {
  receiverId: number;
};

export type GetPersonalChatRoomExistedResponse = {
  isRoomExisted: boolean;
  isSenderActive: boolean;
};

export type GetAllChatRoomListRequest = {
  type: ChatRoom['type'];
};

export type GetAllChatRoomListResponse = ChatRoom[];

export type GetChatRoomDetailsRequest = {
  roomId: number;
};

export type GetChatRoomDetailsResponse = ChatRoomDetail;

export type GetAllChatMessagesRequest = {
  roomId: number;
};

export type GetAllChatMessagesResponse = ChatMessage[];

export type SendMessageRequest = {
  senderId: string | number;
  content: string | null;
};

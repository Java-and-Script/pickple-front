import { Message } from '@type/models/Message';
import { MessageRoom } from '@type/models/MessageRoom';

export type PostCreatePersonalRoomRequest = {
  receiverId: number;
};

export type PostCreatePersonalRoomResponse = {
  id: number;
  roomName: string;
  type: Message['type'];
  memberCount: number;
  maxMemberCount: number;
};

export type GetPersonalRoomExistedRequest = {
  receiverId: number;
};

export type GetPersonalRoomExistedResponse = { existed: boolean };

export type GetAllRoomSubscribedRequest = {
  type: MessageRoom['type'];
};

export type GetAllRoomSubscribedResponse = MessageRoom[];

export type GetRoomDetailsRequest = {
  roomId: number;
};

export type GetRoomDetailsResponse = MessageRoom;

export type GetAllMessagesRequest = {
  roomId: number;
};

export type getAllMessagesResponse = Message[];

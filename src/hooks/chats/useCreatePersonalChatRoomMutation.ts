import { useMutation } from '@tanstack/react-query';

import { postCreatePersonalChatRoom } from '@api/chat/postCreatePersonalChatRoom';

export const useCreatePersonalChatRoomMutation = () => {
  const mutation = useMutation({
    mutationFn: postCreatePersonalChatRoom,
  });

  return mutation;
};

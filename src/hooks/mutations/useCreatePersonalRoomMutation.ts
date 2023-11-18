import { useMutation } from '@tanstack/react-query';

import { postCreatePersonalRoom } from '@api/message/postCreatePersonalRoom';

export const useCreatePersonalRoomMutation = () => {
  return useMutation({
    mutationFn: postCreatePersonalRoom,
  });
};

import { useMutation } from '@tanstack/react-query';

import { postGame } from '@api/games/postGame';

export const useGameMutation = () => {
  return useMutation({
    mutationFn: postGame,
  });
};

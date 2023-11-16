import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAlarms } from '@api/alarms/deleteAlarms';

export const useAlarmsDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['alarms-delete'],
    mutationFn: deleteAlarms,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['alarms'] });
    },
  });
};

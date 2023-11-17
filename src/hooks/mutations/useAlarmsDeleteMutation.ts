import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAlarms } from '@api/alarms/deleteAlarms';

import { DeleteAlarmsRequest } from '@type/api/alarm';

export const useAlarmsDeleteMutation = (params: DeleteAlarmsRequest) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['alarms-delete', JSON.stringify(params)],
    mutationFn: () => deleteAlarms(params),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['alarms'] });
    },
  });
};

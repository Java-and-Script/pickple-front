import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useAlarmsDeleteMutation } from '@hooks/alarms/useAlarmsDeleteMutation';
import { useAlarmsQuery } from '@hooks/alarms/useAlarmsQuery';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useNotificationPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  const isLoggedIn = Boolean(loginInfo?.id);
  if (!isLoggedIn) {
    throw new LoginRequireError();
  }

  const {
    data: { pages },
    fetchNextPage,
    hasNextPage,
  } = useAlarmsQuery();
  const alarms = pages.flatMap((page) => page.alarmResponse);

  const entryRef = useInfiniteScroll<HTMLDivElement>(() => {
    hasNextPage && fetchNextPage();
  });

  const { mutate: deleteAlarmMutate } = useAlarmsDeleteMutation();

  return {
    alarms,
    entryRef,
    deleteAlarmMutate,
  };
};

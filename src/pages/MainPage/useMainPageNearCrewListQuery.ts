import { useSuspenseQuery } from '@tanstack/react-query';

import { getNearCrewList } from '@api/crews/getNearCrewList';

const FETCH_SIZE = 3;

export const useMainPageNearCrewListQuery = ({
  addressDepth1,
  addressDepth2,
}: {
  addressDepth1: string;
  addressDepth2: string;
}) => {
  return useSuspenseQuery({
    queryKey: ['mainpage-crews'],
    queryFn: () =>
      getNearCrewList({
        addressDepth1,
        addressDepth2,
        page: 0,
        size: FETCH_SIZE,
      }),
  });
};

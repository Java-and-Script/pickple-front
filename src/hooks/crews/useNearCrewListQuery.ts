import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getNearCrewList } from '@api/crews/getNearCrewList';

import { GetNearCrewListRequest } from '@type/api/crews';

import { FETCH_SIZE } from '@constants/network';

export const useNearCrewListQuery = ({
  addressDepth1,
  addressDepth2,
}: Pick<GetNearCrewListRequest, 'addressDepth1' | 'addressDepth2'>) => {
  const { data, ...query } = useSuspenseInfiniteQuery({
    queryKey: ['near-crews', addressDepth1, addressDepth2],
    queryFn: ({ pageParam }) =>
      getNearCrewList({
        addressDepth1,
        addressDepth2,
        page: pageParam,
        size: FETCH_SIZE,
      }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < FETCH_SIZE) {
        return undefined;
      }
      return pages.length;
    },
    initialPageParam: 0,
  });
  const nearCrews = data.pages.flat();

  return { nearCrews, data, ...query };
};

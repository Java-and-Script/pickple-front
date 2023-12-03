import { useGamesQuery } from '@hooks/games/useGamesQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { DEFAULT_ADDRESS_DEPTHS } from '@constants/location';

export const useGamesNearPage = () => {
  const { entryRef: titleRef, showHeaderTitle } =
    useHeaderTitle<HTMLDivElement>();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const { games, fetchNextPage, isFetchingNextPage } = useGamesQuery({
    category: 'location',
    value: `${
      loginInfo?.addressDepth1 || DEFAULT_ADDRESS_DEPTHS.addressDepth1
    }+${loginInfo?.addressDepth2 || DEFAULT_ADDRESS_DEPTHS.addressDepth2}`,
  });
  const lastElementRef = useInfiniteScroll<HTMLDivElement>(fetchNextPage);

  return {
    games,
    isFetchingNextPage,
    lastElementRef,
    titleRef,
    showHeaderTitle,
  };
};

import { useNavigate } from 'react-router-dom';

import { useNearCrewListQuery } from '@hooks/crews/useNearCrewListQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { DEFAULT_ADDRESS_DEPTHS } from '@constants/location';
import { PATH_NAME } from '@constants/pathName';

export const useCrewsRecommendPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const { nearCrews, fetchNextPage, isFetchingNextPage } = useNearCrewListQuery(
    loginInfo && loginInfo.addressDepth1 !== null
      ? {
          addressDepth1: loginInfo.addressDepth1,
          addressDepth2: loginInfo.addressDepth2,
        }
      : DEFAULT_ADDRESS_DEPTHS
  );

  const { entryRef: titleRef, showHeaderTitle } =
    useHeaderTitle<HTMLDivElement>();
  const lastElementRef = useInfiniteScroll<HTMLDivElement>(fetchNextPage);
  const navigate = useNavigate();
  const navigateToDetailPage = (crewId: number) =>
    navigate(PATH_NAME.GET_CREWS_PATH(String(crewId)));

  return {
    nearCrews,
    isFetchingNextPage,
    titleRef,
    showHeaderTitle,
    lastElementRef,
    navigateToDetailPage,
  };
};

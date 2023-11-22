import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { useNearCrewListQuery } from '@hooks/queries/useNearCrewListQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { FETCH_SIZE } from '@consts/network';
import { PATH_NAME } from '@consts/pathName';

import { PageContent, PageWrapper } from './CrewsRecommendPage.styles';

const DEFAULT_ADDRESS_DEPTHS = {
  addressDepth1: '서울시',
  addressDepth2: '강남구',
} as const;

export const CrewsRecommendPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const { nearCrews, fetchNextPage, isFetchingNextPage } = useNearCrewListQuery(
    loginInfo && loginInfo.addressDepth1 !== null
      ? {
          addressDepth1: loginInfo.addressDepth1,
          addressDepth2: loginInfo.addressDepth2,
        }
      : DEFAULT_ADDRESS_DEPTHS
  );

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();
  const lastElementRef = useInfiniteScroll<HTMLDivElement>(fetchNextPage);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '추천 크루' : ''} />
      <PageContent>
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            추천 크루
          </Text>
        </div>
        {nearCrews.map((crew) => {
          const membersProfileImageUrls = crew.members.map(
            (member) => member.profileImageUrl
          );
          return (
            <CrewItem
              key={crew.id}
              name={crew.name}
              address={`${crew.addressDepth1} ${crew.addressDepth2}`}
              imgSrc={crew.profileImageUrl}
              membersProfileImageUrls={membersProfileImageUrls}
              memberCount={crew.memberCount}
              maxMemberCount={crew.maxMemberCount}
              onClick={() =>
                navigate(PATH_NAME.GET_CREWS_PATH(String(crew.id)))
              }
            />
          );
        })}
        {isFetchingNextPage && <SkeletonCardList count={FETCH_SIZE} />}
        <div ref={lastElementRef}></div>
      </PageContent>
    </PageWrapper>
  );
};

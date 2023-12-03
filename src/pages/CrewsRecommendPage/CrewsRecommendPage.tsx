import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { FETCH_SIZE } from '@constants/network';

import { PageContent, PageWrapper } from './CrewsRecommendPage.styles';
import { useCrewsRecommendPage } from './hooks/useCrewsRecommendPage';

export const CrewsRecommendPage = () => {
  const {
    nearCrews,
    isFetchingNextPage,
    titleRef,
    showHeaderTitle,
    lastElementRef,
    navigateToDetailPage,
  } = useCrewsRecommendPage();

  return (
    <PageWrapper>
      <Header title={showHeaderTitle ? '추천 크루' : ''} />
      <PageContent>
        <div ref={titleRef}>
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
              onClick={() => navigateToDetailPage(crew.id)}
            />
          );
        })}
        {isFetchingNextPage && <SkeletonCardList count={FETCH_SIZE} />}
        <div ref={lastElementRef}></div>
      </PageContent>
    </PageWrapper>
  );
};

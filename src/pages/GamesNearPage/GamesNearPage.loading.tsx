import { Header } from '@components/Header';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { PageContent, PageLayout } from './GamesNearPage.styles';

export const GamesNearPageLoading = () => {
  return (
    <PageLayout>
      <Header />
      <PageContent>
        <Text size={20} weight={700}>
          내 근처 게스트 매치
        </Text>
        <SkeletonCardList />
      </PageContent>
    </PageLayout>
  );
};

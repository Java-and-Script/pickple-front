import { Header } from '@components/Header';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Text } from '@components/shared/Text';

import { PageContent, PageWrapper } from './CardListPageSkeleton.styles';

type CardListPageSkeletonProps = {
  name: string;
};

export const CardListPageSkeleton = ({ name }: CardListPageSkeletonProps) => {
  return (
    <PageWrapper>
      <Header />
      <PageContent gap={10} direction="column">
        <Text size={20} weight={700}>
          {name}
        </Text>
        <SkeletonCardList />
      </PageContent>
    </PageWrapper>
  );
};

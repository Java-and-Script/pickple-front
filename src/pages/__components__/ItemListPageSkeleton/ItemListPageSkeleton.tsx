import { Header } from '@components/Header';
import { ManageContainer } from '@components/Participation';
import { Skeleton } from '@components/Skeleton';

import { theme } from '@styles/theme';

import { PageContent } from './ItemListPageSkeleton.styles';

type ItemListPageSkeletonProps = {
  name: string;
  isRightContainer?: boolean;
};

export const ItemListPageSkeleton = ({
  name,
  isRightContainer = true,
}: ItemListPageSkeletonProps) => {
  return (
    <Skeleton
      width="100%"
      height="60px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_200}
      gradientColor={theme.PALETTE.GRAY_300}
    >
      <ManageContainer>
        <Header title={name} isRightContainer={isRightContainer} />
        <PageContent direction="column" gap={10}>
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
          <Skeleton.Item />
        </PageContent>
      </ManageContainer>
    </Skeleton>
  );
};

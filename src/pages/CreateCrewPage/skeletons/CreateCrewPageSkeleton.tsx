import { Header } from '@components/Header';
import { Skeleton } from '@components/Skeleton';

import { theme } from '@styles/theme';

import { PageContent, PageWrapper } from './CreateCrewPageSkeleton.styles';

export const CreateCrewPageSkeleton = () => {
  return (
    <PageWrapper>
      <Header />
      <PageContent gap={10} direction="column">
        <Skeleton
          width="100%"
          height="30px"
          radius="5px"
          defaultColor="white"
          gradientColor={theme.PALETTE.GRAY_100}
        >
          <Skeleton.Item
            width="200px"
            height="40px"
            defaultColor={theme.PALETTE.GRAY_200}
            gradientColor={theme.PALETTE.GRAY_300}
          />

          <Skeleton.Item
            width="200px"
            defaultColor={theme.PALETTE.GRAY_200}
            gradientColor={theme.PALETTE.GRAY_300}
          />
          <Skeleton.Item />
          <Skeleton.Item
            width="200px"
            defaultColor={theme.PALETTE.GRAY_200}
            gradientColor={theme.PALETTE.GRAY_300}
          />
          <Skeleton.Item />
          <Skeleton.Item
            width="200px"
            defaultColor={theme.PALETTE.GRAY_200}
            gradientColor={theme.PALETTE.GRAY_300}
          />
          <Skeleton.Item width="100px" />
          <Skeleton.Item
            width="200px"
            defaultColor={theme.PALETTE.GRAY_200}
            gradientColor={theme.PALETTE.GRAY_300}
          />
          <Skeleton.Item height="300px" />
        </Skeleton>
      </PageContent>
    </PageWrapper>
  );
};

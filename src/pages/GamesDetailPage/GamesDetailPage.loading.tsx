import { Header } from '@components/Header';
import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { PageContent, PageLayout } from './GamesDetailPage.styles';

export const GamesDetailPageLoading = () => {
  return (
    <Skeleton
      width="100%"
      height="30px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_100}
      gradientColor={theme.PALETTE.GRAY_200}
    >
      <PageLayout>
        <Header />
        <PageContent>
          <Flex direction="column" gap={3}>
            <Skeleton.Item width="150px" height="35px" />
            <Skeleton.Item width="250px" height="30px" />
          </Flex>
          <Skeleton.Item height="60px" />

          <Skeleton.Item width="100px" />
          <Flex direction="column" gap={10}>
            <Skeleton.Item height="18px" width="250px" />
            <Skeleton.Item height="18px" width="200px" />
            <Skeleton.Item height="18px" width="250px" />
            <Skeleton.Item height="18px" width="200px" />
          </Flex>
          <Flex gap={10}>
            <Skeleton.Item width="100px" height="100px" />
            <Skeleton.Item width="100px" height="100px" />
            <Skeleton.Item width="100px" height="100px" />
          </Flex>

          <Skeleton.Item width="100px" />
          <Flex direction="column" gap={3}>
            <Skeleton.Item height="14px" />
            <Skeleton.Item height="14px" />
            <Skeleton.Item height="14px" />
            <Skeleton.Item height="14px" width="100px" />
          </Flex>
          <Skeleton.Item width="150px" />
          <Flex gap={10}>
            <Skeleton
              width="60px"
              height="60px"
              radius="5px"
              defaultColor={theme.PALETTE.GRAY_100}
              gradientColor={theme.PALETTE.GRAY_200}
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <Flex key={index} direction="column" gap={3}>
                    <Skeleton.Item />
                    <Skeleton.Item height="14px" width="40px" />
                  </Flex>
                ))}
            </Skeleton>
          </Flex>
        </PageContent>
      </PageLayout>
    </Skeleton>
  );
};

import styled from '@emotion/styled';

import { Header } from '@components/Header';
import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { PageWrapper, SkeletonPageContent } from './CrewsDetailPage.styles';

export const CrewsDetailPageLoading = () => {
  return (
    <Skeleton
      width="100%"
      height="30px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_100}
      gradientColor={theme.PALETTE.GRAY_200}
    >
      <PageWrapper>
        <Skeleton.Item height="calc(100dvw * 10 / 16)" />
        <Header />
        <SkeletonPageContent direction="column" gap={20}>
          <AbsoluteDiv>
            <Flex direction="column" justify="center" align="center" gap={3}>
              <Skeleton.Item
                width="80px"
                height="80px"
                defaultColor={theme.PALETTE.GRAY_200}
                gradientColor={theme.PALETTE.GRAY_300}
              />
              <Skeleton.Item width="60px" height="20px" />
            </Flex>
          </AbsoluteDiv>
          <Skeleton.Item width="100px" />
          <Flex direction="column" gap={3}>
            <Skeleton.Item height="20px" />
            <Skeleton.Item width="150px" height="20px" />
          </Flex>
          <Skeleton.Item width="100px" />
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
          <Skeleton.Item width="100px" />
          <Flex gap={10}>
            <Skeleton.Item width="100px" height="100px" />
            <Skeleton.Item width="100px" height="100px" />
            <Skeleton.Item width="100px" height="100px" />
          </Flex>
        </SkeletonPageContent>
      </PageWrapper>
    </Skeleton>
  );
};

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  translate: calc(-50%) calc(-50%);
`;

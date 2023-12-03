import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { FlexItem, Main } from '../ProfilePage.style';

export const ProfileSkeleton = () => (
  <Main>
    <Skeleton
      width="100%"
      height="30px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_100}
      gradientColor={theme.PALETTE.GRAY_200}
    >
      <FlexItem>
        <Flex align="flex-end" gap={8}>
          <Skeleton.Item width="70px" height="24px" />
          <Skeleton.Item width="72px" height="17px" />
        </Flex>
        <Flex justify="center" gap={40} align="center">
          <Skeleton.Item width="100px" height="100px" radius="50px" />
          <Skeleton.Item width="58px" height="78px" />
          <Skeleton.Item width="35px" height="78px" />
        </Flex>

        <Flex justify="center" gap={10}>
          <Skeleton.Item width="50%" radius="0.75rem" height="32px" />
          <Skeleton.Item width="50%" radius="0.75rem" height="32px" />
        </Flex>
        <Flex gap={7} direction="column">
          <Skeleton.Item width="56px" height="20px" />
          <Flex gap={10} flexWrap="wrap">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <Skeleton.Item width="45px" height="45px" key={index} />
              ))}
          </Flex>
        </Flex>
        <Flex gap={7} direction="column">
          <Skeleton.Item width="80px" height="20px" />
          <Flex gap={10} flexWrap="wrap">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Skeleton.Item width="45px" height="45px" key={index} />
              ))}
          </Flex>
        </Flex>
        <Flex gap={7} direction="column">
          <Skeleton.Item width="92px" height="20px" />
          <Skeleton.Item width="100%" height="32px" radius="20px" />
        </Flex>
      </FlexItem>
    </Skeleton>
  </Main>
);

import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

export const SkeletonChatRoomList = () => (
  <Skeleton
    width="100%"
    height="12px"
    radius="5px"
    defaultColor={theme.PALETTE.GRAY_100}
    gradientColor={theme.PALETTE.GRAY_200}
  >
    <Flex direction="column" gap={16}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Flex gap={10} key={index}>
            <Skeleton.Item width="40px" height="40px" />
            <Flex direction="column" grow justify="space-between">
              <Flex justify="space-between">
                <Skeleton.Item width="20%" height="14px" />
                <Skeleton.Item width="10%" height="14px" />
              </Flex>
              <Skeleton.Item width="75%" />
            </Flex>
          </Flex>
        ))}
    </Flex>
  </Skeleton>
);

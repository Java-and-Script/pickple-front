import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { SkeletonItemWrapper } from './SkeletonCardList.styles';

type SkeletonCardListProps = {
  count?: number;
  gap?: number;
};

export const SkeletonCardList = ({
  count = 10,
  gap = 16,
}: SkeletonCardListProps) => {
  return (
    <Skeleton
      width="100%"
      height="30px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_100}
      gradientColor={theme.PALETTE.GRAY_200}
    >
      <Flex direction="column" gap={gap}>
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <SkeletonItemWrapper gap={10} key={index}>
              <Skeleton.Item width="82px" height="82px" />
              <Flex direction="column" grow justify="space-between">
                <Skeleton.Item width="200px" />
                <Skeleton.Item width="150px" height="20px" />
                <Skeleton.Item height="20px" />
              </Flex>
            </SkeletonItemWrapper>
          ))}
      </Flex>
    </Skeleton>
  );
};

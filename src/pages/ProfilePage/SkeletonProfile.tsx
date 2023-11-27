import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { ProfileField } from './Profile';
import { FlexItem, Main } from './ProfilePage.style';

export const SkeletonProfile = () => (
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
          <Skeleton.Item width="40px" />
          <Skeleton.Item width="100px" height="20px" />
        </Flex>
        <Flex justify="center" gap={40} align="center">
          <Skeleton.Item width="100px" height="100px" radius="50px" />
          <Skeleton.Item width="58px" height="78px" />
          <Skeleton.Item width="58px" height="78px" />
          {/* <Flex direction="column" align="center" gap={4}>
            <Skeleton.Item width="58px" height="18px" />
            <Skeleton.Item width="28px" height="24px" />
            <Skeleton.Item width="18px" height="18px" />
          </Flex> */}
        </Flex>

        <Flex justify="center" gap={10}>
          <Skeleton.Item width="50%" radius="0.75rem" />
          <Skeleton.Item width="50%" radius="0.75rem" />
        </Flex>

        <ProfileField category="포지션">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Skeleton.Item width="45px" height="45px" key={index} />
            ))}
        </ProfileField>
        <ProfileField category="소속 크루">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Skeleton.Item width="45px" height="45px" key={index} />
            ))}
        </ProfileField>
        <ProfileField category="자기소개">
          <Skeleton.Item width="100%" height="32px" radius="20px" />
        </ProfileField>
      </FlexItem>
    </Skeleton>
  </Main>
);

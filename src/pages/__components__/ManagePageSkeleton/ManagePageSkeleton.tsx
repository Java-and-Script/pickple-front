import styled from '@emotion/styled';

import { Header } from '@components/Header';
import { ManageContainer } from '@components/Participation';
import { Skeleton } from '@components/Skeleton';
import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

export const ManagePageSkeleton = () => {
  return (
    <Skeleton
      width="100%"
      height="60px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_200}
      gradientColor={theme.PALETTE.GRAY_300}
    >
      <ManageContainer>
        <Header
          title={
            <HeaderTitleWrapper justify="center" align="center">
              <Skeleton.Item height="16px" />
            </HeaderTitleWrapper>
          }
        />
        <PageContent direction="column" gap={10}>
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

const PageContent = styled(Flex)`
  padding: 10px 0 70px 0;
`;

const HeaderTitleWrapper = styled(Flex)`
  height: 100%;
`;

import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
`;

export const PageContent = styled(Flex)`
  position: relative;
  padding: 10px 0 70px 0;
`;

export const SkeletonPageContent = styled(Flex)`
  position: relative;
  padding: 80px 0 70px 0;
`;

export const CrewProfileInfo = styled(Flex)`
  height: calc(100dvw * 10 / 16 + 50px);
`;

export const BackgoundImage = styled(Image)`
  position: absolute;
  top: 0;
  z-index: -1;
  left: -1rem;
`;

export const ProfileImage = styled(Image)`
  border: 1px solid white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const MembersContainer = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow: scroll;
`;

export const MemberWrapper = styled(Flex)`
  width: max-content;
  white-space: nowrap;
`;

export const MemberName = styled(Text)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 60px;
`;

export const InfoItem = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-width: 150px;
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.PALETTE.GRAY_400}`};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  padding: 5px 16px;
  background-color: white;
  width: 100dvw;
  bottom: 70px;
  left: 0;
`;

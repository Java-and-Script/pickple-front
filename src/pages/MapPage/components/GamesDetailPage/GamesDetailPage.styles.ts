import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const PageLayout = styled.div`
  height: 60dvh;
  overflow: scroll;
  ${({ theme }) => theme.STYLES.LAYOUT}
  padding-top: 10px;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 0 0;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  border: ${({ theme }) => `1px solid ${theme.PALETTE.GRAY_200}`};
`;

export const UserProfileWrapper = styled.div`
  display: flex;
`;

export const GrayText = styled(Text)`
  color: ${({ theme }) => theme.PALETTE.GRAY_400};
`;

export const InfoItem = styled.div`
  width: 100%;
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

export const GuestsContainer = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow-x: scroll;
`;

export const Guests = styled(Flex)`
  width: max-content;
  white-space: nowrap;
`;

export const GuestName = styled(Text)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 60px;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  padding: 5px 16px;
  background-color: white;
  width: 100dvw;
  bottom: 70px;
  left: 0;
`;

export const ContentText = styled(Text)`
  white-space: pre-wrap;
  word-break: break-all;
`;

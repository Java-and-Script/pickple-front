import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 1rem 0;
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
  overflow: scroll;
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

import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 60px 0;
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
  z-index: 1;
`;

export const PositionItemBox = styled.div`
  border: ${({ theme }) => `1px solid ${theme.PALETTE.GRAY_400}`};
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.PALETTE.GRAY_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  overflow: hidden;
  cursor: pointer;
`;

export const ModalItem = styled(Flex)`
  padding: 16px;
`;

export const ToolTipText = styled(Text)`
  padding: 0 2px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.PALETTE.RED_400};
`;

export const ContentText = styled(Text)`
  white-space: pre-wrap;
  word-break: break-all;
`;

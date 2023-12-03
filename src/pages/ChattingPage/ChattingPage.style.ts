import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { CHAT_TYPE } from '@constants/chat';

export const ChatRoomContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
`;

export const Main = styled(Flex)`
  margin: 10px 0;
`;

export const SendButton = styled.button`
  width: 48px;
  height: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  background-color: ${({ theme }) => theme.PALETTE.RED_500};
  color: white;
  outline: none;
  border-radius: 40%;
  border: none;
  & > svg {
    width: 100%;
    height: inherit;
    path {
      fill: white;
    }
  }
`;

export const InputWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_200};
`;

export const BalloonContainer = styled(Flex)<{ isOthersMessage: boolean }>`
  max-width: 70%;
  padding-left: 10px;
  & > span {
    padding: 10px;
    white-space: pre-wrap;
    word-break: break-all;
    ${({ isOthersMessage, theme }) =>
      isOthersMessage
        ? ` 
      border-radius: 0 8px 8px 8px; 
      border:1px solid ${theme.PALETTE.GRAY_200}; 
    `
        : `  
      color:white;
      border-radius: 8px 0 8px 8px;
      background-color: ${theme.PALETTE.RED_300};
  `};
  }
`;

export const BalloonInfo = styled(Flex)`
  padding-left: 4px;
`;

export const SystemMessage = styled.div<{ type: string }>`
  text-align: center;
  padding: 12px;
  & > span {
    display: inline;
    padding: 4px;
    border-radius: 4px;
    background-color: ${({ theme, type }) =>
      type === CHAT_TYPE.DATE
        ? theme.PALETTE.GRAY_300
        : theme.PALETTE.GRAY_400};
  }
`;

export const ModalItem = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export const RoomNameWrapper = styled.div`
  cursor: pointer;
`;

export const FlexModalItem = styled(Flex)`
  padding: 14px 20px;
  cursor: pointer;
`;

export const AlignedCenteredText = styled(Text)`
  text-align: center;
  width: 100%;
`;

export const ProfileListContainer = styled.div`
  max-height: 60vh;
`;

import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const MessageRoomContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
`;

export const Main = styled(Flex)`
  margin: 10px 0;
`;

export const SendButton = styled.button`
  width: 48px;
  height: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  background-color: ${({ theme }) => theme.PALETTE.RED_500};
  color: white;
  outline: none;
  border-radius: 8px;
  border: none;
`;

export const InputWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_200};
`;

export const BalloonContainer = styled(Flex)<{ isMe: boolean }>`
  max-width: 70%;
  padding-left: 10px;
  & > p {
    padding: 10px;
    white-space: pre-wrap;
    ${({ isMe, theme }) =>
      isMe
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

export const SystemMessage = styled.div`
  text-align: center;
  padding: 12px;
  & > p {
    display: inline;
    padding: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.PALETTE.GRAY_400};
  }
`;

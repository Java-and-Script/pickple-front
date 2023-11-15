import styled from '@emotion/styled';

export const MessageRoomContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

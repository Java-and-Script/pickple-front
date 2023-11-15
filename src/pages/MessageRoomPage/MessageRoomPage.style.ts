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

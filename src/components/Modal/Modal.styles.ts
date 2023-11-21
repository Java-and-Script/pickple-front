import styled from '@emotion/styled';

export const ModalHeader = styled.div<{ header: number }>`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  padding-bottom: ${({ header }) => `${header}px`};
`;

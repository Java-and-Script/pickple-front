import styled from '@emotion/styled';

export const CreatePageContainer = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ theme }) => theme.STYLES.LAYOUT}
  padding-top: 3.1rem;
`;

export const CreatePageCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

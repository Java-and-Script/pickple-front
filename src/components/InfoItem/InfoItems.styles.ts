import styled from '@emotion/styled';

export const StyledInfoItem = styled.div`
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

import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const StyledTitle = styled.div`
  margin-bottom: 25px;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 8px;
`;

export const StyledInput = styled.div`
  margin-bottom: 8px;
`;

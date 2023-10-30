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

export const StyledInput = styled.input`
  height: 30px;
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const StyledPositionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCreateForm = styled.div``;

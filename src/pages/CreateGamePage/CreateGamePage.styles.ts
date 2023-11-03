import styled from '@emotion/styled';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  margin-bottom: 25px;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 8px;
`;

export const StyledInput = styled.input<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '30px')};
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const StyledPositionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
`;

export const StyledCreateForm = styled.form``;

export const StyledEmptyContainer = styled.div`
  height: 16px;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  width: 100%;
  height: 340px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

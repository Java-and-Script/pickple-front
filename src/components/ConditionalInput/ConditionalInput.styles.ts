import styled from '@emotion/styled';

export const StyledInput = styled.input<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '30px')};
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 8px;
`;

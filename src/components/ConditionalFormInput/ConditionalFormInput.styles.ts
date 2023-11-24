import styled from '@emotion/styled';

export const StyledInput = styled.input<{ height?: number | string }>`
  padding-left: 10px;
  width: 100%;
  height: 30px;
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
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

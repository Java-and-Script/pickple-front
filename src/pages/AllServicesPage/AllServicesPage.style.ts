import styled from '@emotion/styled';

export const AllServicesContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const Main = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 10px 0;
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Item = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 8px;
  :active {
    filter: brightness(90%);
  }
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${({ theme }) => theme.PALETTE.GRAY_500};
    }
  }
`;

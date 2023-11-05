import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemBox = styled.div<{ border?: string }>`
  border: ${({ border, theme }) =>
    border ?? `1px solid ${theme.PALETTE.GRAY_400}`};
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 12px;
  color: ${({ theme }) => theme.PALETTE.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  overflow: hidden;
`;

export const ProfileFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 480px;
`;

export const Introduce = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  border-radius: 20px;
  max-width: 480px;
  min-width: 320px;
  padding: 16px;
  display: inline-block;
`;

export const ColoredSvgWrapper = styled.div<{ color?: string }>`
  width: 30px;
  height: 30px;
  path {
    fill: ${({ color, theme }) => color ?? theme.PALETTE.GRAY_500};
  }
`;

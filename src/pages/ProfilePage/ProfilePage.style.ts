import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
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

export const PositionItem = styled.div<{ border?: string }>`
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

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 480px;
`;

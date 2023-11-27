import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const ProfileContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  display: flex;
`;

export const Main = styled.div`
  margin: 10px 0;
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
  cursor: pointer;
`;

export const ProfileFieldContainer = styled.div`
  width: 100%;
`;

export const CrewGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Introduce = styled(Text)`
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  border-radius: 20px;
  width: 100%;
  padding: 16px;
  white-space: pre-wrap;
  word-break: break-all;
`;

export const PointerFlex = styled(Flex)`
  cursor: pointer;
`;

export const ColoredSvgWrapper = styled.div<{ color?: string }>`
  height: 30px;
  width: auto;
  overflow: hidden;
  path {
    fill: ${({ color, theme }) => color ?? theme.PALETTE.GRAY_500};
  }
`;

export const NumberedItemWrapper = styled.div<{ isClicked: boolean }>`
  perspective: 300px;
  cursor: pointer;
  descent-override,
  div,
  div > div {
    text-align: center;
    backface-visibility: hidden;
    transition: 1s;
  }
  & > div:first-of-type {
    position: absolute;
    transform: rotateY(0deg);
  }
  & > div:last-of-type {
    transform: rotateY(-180deg);
  }
  ${({ isClicked }) =>
    isClicked &&
    `
    &>div:first-of-type {
      transform: rotateY(180deg);
    }
    &>div:last-of-type {
      transform: rotateY(0deg);
    }
  `}
`;

export const ModalItem = styled(Flex)`
  margin: 16px;
`;

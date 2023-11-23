import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const CrewsChiefContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const Main = styled(Flex)`
  margin: 10px 0;
`;

export const CrewItemWrapper = styled.div`
  position: relative;
`;

export const DotsWrapper = styled.div`
  padding-top: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ModalContentInner = styled(Flex)`
  margin-bottom: 30px;
`;

export const ModalItemWrapper = styled(Flex)`
  padding: 5px 16px;
`;

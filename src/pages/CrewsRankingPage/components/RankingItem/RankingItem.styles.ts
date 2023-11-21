import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const RankingItemWrapper = styled(Flex)<{ backgroundColor: string }>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const RankText = styled(Text)`
  width: 1.3rem;
  text-align: end;
`;

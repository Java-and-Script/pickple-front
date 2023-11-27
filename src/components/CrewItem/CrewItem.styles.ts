import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';

export const CrewItemWrapper = styled(Flex)`
  background-color: white;
  padding: 12px;
  border-radius: 8px;
`;

export const CrewProfileImage = styled(Image)`
  min-width: 82px;
  border-radius: 8px;
`;

export const CrewDescription = styled(Flex)`
  flex-grow: 1;
`;

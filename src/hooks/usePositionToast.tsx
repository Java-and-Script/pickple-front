import toast from 'react-hot-toast';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { usePositionsQuery } from '@hooks/data/usePositionsQuery';

import { Position } from '@type/models/Position';

export const usePositionToast = () => {
  const { data: positions } = usePositionsQuery();

  const getClickedPosition = (myPosition: Position) => {
    const positionInfo = positions.find(
      (position) => position.acronym === myPosition
    );

    return positionInfo;
  };

  const handleClickPosition = (myPosition: Position) => {
    const positionInfo = getClickedPosition(myPosition);

    if (!positionInfo) {
      return;
    }

    toast(
      () => (
        <Flex align="center">
          <Flex direction="column" align="center">
            <Text size={18} weight={700}>
              {positionInfo.name}
            </Text>
            <Text>{positionInfo.description}</Text>
          </Flex>
        </Flex>
      ),
      { position: 'bottom-center' }
    );
  };

  return { getClickedPosition, handleClickPosition };
};

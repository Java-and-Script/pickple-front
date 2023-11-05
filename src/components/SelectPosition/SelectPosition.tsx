import { ToggleButton } from '@components/shared/ToggleButton';
import { useToggleButtons } from '@components/shared/ToggleButton';

import { Position } from '@type/models/Position';

export const SelectPosition = ({
  setPositions,
}: {
  setPositions: (value: Position[]) => void;
}) => {
  const positions = ['C', 'PF', 'SF', 'PG', 'SG', '없음'];

  const handledToggle = (value: string[]) => {
    setPositions(value as Position[]);
  };

  const { handleToggle, selectedItems } = useToggleButtons({
    onToggle: handledToggle,
    isMultipleSelect: true,
  });

  return (
    <>
      {positions.map((position) => (
        <ToggleButton
          type="button"
          fontSize="12px"
          width="47px"
          height="32px"
          key={position}
          value={position}
          isActive={selectedItems.includes(position)}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
};

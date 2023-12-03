import { ToggleButton } from '@components/shared/ToggleButton';
import { useToggleButtons } from '@components/shared/ToggleButton';

import { Position } from '@type/models/Position';

import { POSITIONS_BUTTON } from '@constants/positions';

export const SelectPosition = ({
  setPositions,
}: {
  setPositions: (value: Position[]) => void;
}) => {
  const handledToggle = (value: string[]) => {
    setPositions(value as Position[]);
  };

  const { handleToggle, selectedItems } = useToggleButtons({
    onToggle: handledToggle,
    isMultipleSelect: true,
    noValue: POSITIONS_BUTTON['없음'],
  });

  return (
    <>
      {Object.values(POSITIONS_BUTTON).map((position) => (
        <ToggleButton
          type="button"
          fontSize="12px"
          width="47px"
          height="32px"
          key={position}
          value={position}
          isActive={selectedItems.includes(position)}
          onToggle={() => handleToggle(position)}
        />
      ))}
    </>
  );
};

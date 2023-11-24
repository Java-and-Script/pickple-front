import { useState } from 'react';

type ToggleButtonsProps<T> = {
  initialValues?: T[];
  onToggle: (value: T[]) => void;
  isMultipleSelect: boolean;
};

export const useToggleButtons = <T>({
  initialValues = [] as T[],
  isMultipleSelect,
  onToggle,
}: ToggleButtonsProps<T>) => {
  const [selectedItems, setSelectedItems] = useState<T[]>(initialValues);

  const handleToggle = (value: T) => {
    if (!value) {
      setSelectedItems([]);
      onToggle([]);
      return;
    }

    const updatedItems = isMultipleSelect
      ? value === '없음'
        ? [value]
        : selectedItems.includes(value)
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems.filter((item) => item !== '없음'), value]
      : value === '없음'
      ? []
      : [value];

    setSelectedItems(updatedItems);
    onToggle(updatedItems);
  };

  return { handleToggle, selectedItems, setSelectedItems };
};

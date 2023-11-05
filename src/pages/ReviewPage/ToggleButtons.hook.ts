import { useState } from 'react';

type ToggleButtonsProps = {
  initialValues?: string[];
  onToggle: (value: string[]) => void;
  isMultipleSelect: boolean;
};
export const useToggleButtons = ({
  initialValues = [],
  isMultipleSelect,
  onToggle,
}: ToggleButtonsProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(initialValues);

  const handleToggle = (value: string) => {
    const updatedItems = isMultipleSelect
      ? selectedItems.includes(value)
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems, value]
      : [value];

    setSelectedItems(updatedItems);
    onToggle(updatedItems);
  };

  return { handleToggle, selectedItems };
};

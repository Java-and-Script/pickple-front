import { useState } from 'react';

type ToggleButtonsProps<T> = {
  initialValues?: T[];
  onToggle: (value: T[]) => void;
  isMultipleSelect: boolean;
  noValue?: T;
};

export const useToggleButtons = <T>({
  initialValues = [] as T[],
  isMultipleSelect,
  onToggle,
  noValue,
}: ToggleButtonsProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [selectedItems, setSelectedItems] = useState<T[]>(initialValues);

  const handleToggle = (value: T) => {
    if (!value) {
      setSelectedItems([]);
      onToggle([]);
      setSelectedItem(null);
      return;
    }

    const handleMultipleSelect = () => {
      if (value === noValue) {
        return [noValue];
      }

      if (selectedItems.includes(value)) {
        return selectedItems.filter((item) => item !== value);
      }

      return [...selectedItems.filter((item) => item !== noValue), value];
    };

    const handleSingleSelect = () => (value === noValue ? [] : [value]);

    const updatedItems = isMultipleSelect
      ? handleMultipleSelect()
      : handleSingleSelect();

    setSelectedItems(updatedItems);
    onToggle(updatedItems);
    setSelectedItem((prev) =>
      prev === value || selectedItems.find((item) => item === value)
        ? null
        : value
    );
  };

  return { selectedItem, handleToggle, selectedItems, setSelectedItems };
};

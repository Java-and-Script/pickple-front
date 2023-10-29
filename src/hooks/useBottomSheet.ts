import { useCallback, useRef } from 'react';

export const useBottomSheet = (closeModal: () => void) => {
  const record = useRef({
    first: 0,
    move: 0,
  });

  const handleTouchStart = (event: TouchEvent) => {
    record.current.first = event.touches[0].screenY;
  };

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!record.current.move) {
      record.current.move = event.touches[0].screenY;
    }
  }, []);

  const handleTouchEnd = () => {
    if (record.current.first !== null && record.current.move !== null) {
      if (record.current.first < record.current.move) {
        closeModal();
      }
    }
    record.current.first = 0;
    record.current.move = 0;
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

import { useRef, useState } from 'react';

export const useCrewChiefModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCrewIdRef = useRef<number | null>(null);

  const open = (crewId: number) => {
    selectedCrewIdRef.current = crewId;
    setIsOpen(true);
  };

  const close = () => {
    selectedCrewIdRef.current = null;
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
    selectedCrewId: selectedCrewIdRef.current,
  };
};

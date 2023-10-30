import React, { useEffect, useRef, useState } from 'react';

import { useBottomSheet } from '@hooks/useBottomSheet';

import {
  BottomSheetContainer,
  StyledBottomSheet,
  StyledDeemBackground,
  StyledModalBottom,
  StyledModalHeader,
} from './ModalBottomSheet.styles';

type ModalBottomSheetProps = {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BottomSheet = ({ children }: { children: React.ReactNode }) => (
  <StyledBottomSheet>{children}</StyledBottomSheet>
);

export const ModalBottomSheet = (props: ModalBottomSheetProps) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleScroll = () => {
      if (window.scrollY < 0) {
        setIsModalVisible(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalVisible(false);
        props.setShowModal(false);

        if (modalRef.current.style) {
          modalRef.current.style.animation =
            'bottom-sheet-down 0.2s ease-in-out';
          modalRef.current.style.transform = 'translateY(100%)';
        }

        setTimeout(() => {
          setIsModalVisible(false);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [props]);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useBottomSheet(
    () => {
      setIsModalVisible(false);
      props.setShowModal(false);
    }
  );

  return (
    <StyledModalBottom>
      {isModalVisible && (
        <>
          <StyledDeemBackground />
          <BottomSheetContainer
            ref={modalRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <BottomSheet {...props}>
              <StyledModalHeader />
              {props.children}
            </BottomSheet>
          </BottomSheetContainer>
        </>
      )}
    </StyledModalBottom>
  );
};

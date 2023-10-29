import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { useBottomSheet } from '@hooks/useBottomSheet';

type ModalBottomProps = {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledDeemBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_900};
  opacity: 0.5;
`;

const StyledBottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75%;
  ${({ theme }) => theme.STYLES.FLEX_CENTER}
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  animation: bottom-sheet-up 0.2s ease-in-out;
`;

const StyledModalHeader = styled.div`
  position: absolute;
  top: 0.69rem;
  width: 3.125rem;
  height: 0.1875rem;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_300};
`;

const StyledModalBottom = styled.div`
  @keyframes bottom-sheet-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottom-sheet-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const BottomSheet = ({ children }: { children: React.ReactNode }) => (
  <StyledBottomSheet>{children}</StyledBottomSheet>
);

export const ModalBottomSheet = (props: ModalBottomProps) => {
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
          <div
            ref={modalRef}
            onTouchStart={() => handleTouchStart}
            onTouchMove={() => handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <BottomSheet {...props}>
              <StyledModalHeader />
              {props.children}
            </BottomSheet>
          </div>
        </>
      )}
    </StyledModalBottom>
  );
};

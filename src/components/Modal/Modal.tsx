import { HTMLAttributes, PropsWithChildren } from 'react';
import BottomSheet from 'react-draggable-bottom-sheet';

import { theme } from '@styles/theme';

import Close from '@assets/close.svg';

import { ModalHeader } from './Modal.styles';

const ModalContent = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div data-no-drag {...props}>
      {children}
    </div>
  );
};

type ModalProps = {
  isOpen: boolean;
  close: VoidFunction;
  header?: boolean | number;
} & PropsWithChildren;

const Modal = ({ children, isOpen, header = false, close }: ModalProps) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      close={close}
      styles={{
        bottomSheet: {
          zIndex: 1000,
        },
        backdrop: {
          opacity: 0.2,
        },
        dragIndicator: {
          wrap: {
            padding: '5px 0',
          },
          indicator: {
            height: '3px',
            backgroundColor: theme.PALETTE.GRAY_300,
            borderRadius: '16px',
          },
        },
        window: {
          wrap: {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          },
        },
      }}
    >
      {header !== false && (
        <ModalHeader header={header === true ? 20 : header}>
          {/* TODO: svg fill 바꿔주기 */}
          <img
            src={Close}
            alt="close"
            width={30}
            onClick={close}
            color={theme.PALETTE.GRAY_400}
          />
        </ModalHeader>
      )}
      {children}
    </BottomSheet>
  );
};

Modal.Content = ModalContent;

export { Modal };

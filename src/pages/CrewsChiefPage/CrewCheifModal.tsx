import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@components/Modal';
import { Text } from '@components/shared/Text';

import { PATH_NAME } from '@consts/pathName';

import RightArrow from '@assets/rightArrow.svg?react';

import { ModalContentInner, ModalItemWrapper } from './CrewsChiefPage.style';

type CrewChiefModalProps = {
  isOpen: boolean;
  close: VoidFunction;
  crewId: number | null;
};

export const CrewChiefModal = ({
  isOpen,
  close,
  crewId,
}: CrewChiefModalProps) => {
  const navigate = useNavigate();
  const closeAndNavigate = (to: string) => {
    flushSync(() => close());
    navigate(to);
  };

  return (
    <Modal isOpen={isOpen} close={close} header>
      {crewId && (
        <Modal.Content>
          <ModalContentInner direction="column" gap={5}>
            <ModalItemWrapper
              justify="space-between"
              onClick={() =>
                closeAndNavigate(PATH_NAME.GET_CREWS_PATH(String(crewId)))
              }
            >
              <Text size={18}>자세히 보기</Text>
              <RightArrow width={18} />
            </ModalItemWrapper>
            <ModalItemWrapper
              justify="space-between"
              onClick={() =>
                closeAndNavigate(
                  PATH_NAME.GET_CREWS_MANAGE_PATH(String(crewId))
                )
              }
            >
              <Text size={18}>크루 관리</Text>
              <RightArrow width={18} />
            </ModalItemWrapper>
          </ModalContentInner>
        </Modal.Content>
      )}
    </Modal>
  );
};

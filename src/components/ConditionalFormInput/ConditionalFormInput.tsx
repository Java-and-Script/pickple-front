import { useFormContext } from 'react-hook-form';

import { Modal } from '@components/Modal';
import { Text } from '@components/shared/Text';

import {
  StyledInput,
  StyledModalHeader,
  StyledSubTitle,
} from './ConditionalFormInput.styles';

export type ConditionalFormInputProps = {
  title: string;
  inputLabel: string;
  inputValue?: string;
  isModalOpen?: boolean;
  isContainModal: boolean;
  isRequired?: boolean;
  children?: React.ReactNode;
  inputOnChange?: (item: string) => void;
  closeModal?: () => void;
};

export const ConditionalFormInput = ({
  title,
  isContainModal = false,
  inputLabel,
  inputOnChange,
  isModalOpen,
  closeModal,
  isRequired,
  children,
  ...inputProps
}: React.ComponentProps<'input'> & ConditionalFormInputProps) => {
  const { register } = useFormContext();
  return (
    <>
      <StyledSubTitle>
        <Text size={16} weight={300}>
          {title}
        </Text>
      </StyledSubTitle>
      <StyledInput
        {...register(inputLabel, { required: isRequired })}
        {...inputProps}
        onChange={(event) => inputOnChange && inputOnChange(event.target.value)}
      />
      {isContainModal && (
        <Modal
          isOpen={isModalOpen as boolean}
          close={closeModal as VoidFunction}
          header={true}
        >
          <StyledModalHeader>
            <Text size={20} weight={700}>
              {title}
            </Text>
          </StyledModalHeader>
          <Modal.Content>{children}</Modal.Content>
        </Modal>
      )}
    </>
  );
};

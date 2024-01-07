import { FieldValues, UseFormRegister } from 'react-hook-form';

import { Modal } from '@components/Modal';
import { Text } from '@components/shared/Text';

import {
  StyledInput,
  StyledModalHeader,
  StyledSubTitle,
} from './ConditionalFormInput.styles';

export type ConditionalFormInputProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  isContainModal?: boolean;
  isModalOpen?: boolean;
  closeModal?: () => void;
  children?: React.ReactNode;
};

export const ConditionalFormInput = ({
  label,
  name,
  register,
  required = false,
  isContainModal = false,
  isModalOpen,
  closeModal,
  children,
  ...inputProps
}: React.ComponentProps<'input'> & ConditionalFormInputProps) => {
  return (
    <>
      {isContainModal ? (
        <>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              {label}
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register(name, { required: required })}
            {...inputProps}
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={true}
          />
          <Modal
            isOpen={isModalOpen as boolean}
            close={closeModal as VoidFunction}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                {label}
              </Text>
            </StyledModalHeader>
            <Modal.Content>{children}</Modal.Content>
          </Modal>
        </>
      ) : (
        <>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              {label}
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register(name, { required: required })}
            {...inputProps}
            onWheel={(event) => event.currentTarget.blur()}
          />
        </>
      )}
    </>
  );
};

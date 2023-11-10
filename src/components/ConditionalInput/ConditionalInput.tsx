import { useForm } from 'react-hook-form';

import { Modal } from '@components/Modal';
import { Text } from '@components/shared/Text';

import {
  StyledInput,
  StyledModalHeader,
  StyledSubTitle,
} from './ConditionalInput.styles';

type ConditionalInputProps = {
  title: string;
  min?: string;
  max?: string;
  step?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  inputType?: string;
  inputLabel: string;
  inputValue?: string;
  isModalOpen?: boolean;
  inputPattern?: string;
  isContainModal: boolean;
  children?: React.ReactNode;
  inputOnClick?: () => void;
  inputOnChange?: (item: string) => void;
  closeModal?: () => void;
};

export const ConditionalInput = ({
  min,
  max,
  step,
  title,
  minLength,
  maxLength,
  inputType,
  readOnly = false,
  isContainModal = false,
  inputLabel,
  inputOnClick,
  inputOnChange,
  inputValue,
  isModalOpen,
  closeModal,
  children,
  inputPattern,
  required = true,
}: ConditionalInputProps) => {
  const { register } = useForm();
  return (
    <>
      <StyledSubTitle>
        <Text size={16} weight={300}>
          {title}
        </Text>
      </StyledSubTitle>
      <StyledInput
        {...register(inputLabel)}
        required={required}
        type={inputType}
        min={min}
        max={max}
        step={step}
        pattern={inputPattern}
        onChange={(event) => inputOnChange && inputOnChange(event.target.value)}
        readOnly={readOnly}
        onClick={inputOnClick}
        value={inputValue}
        minLength={minLength}
        maxLength={maxLength}
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

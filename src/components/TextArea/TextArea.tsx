import { FieldValues, UseFormRegister } from 'react-hook-form';

import { Text } from '@components/shared/Text';

import { StyledSubTitle, StyledTextArea } from './TextArea.styles';

type textAreaProps = {
  label: string;
  name: string;
  defaultValue?: string;
  register: UseFormRegister<FieldValues>;
};

export const TextArea = ({
  label,
  register,
  name,
  defaultValue,
}: textAreaProps) => {
  return (
    <>
      <StyledSubTitle>
        <Text size={16} weight={300}>
          {label}
        </Text>
      </StyledSubTitle>
      <StyledTextArea
        {...register(name)}
        maxLength={1000}
        defaultValue={defaultValue}
      />
    </>
  );
};

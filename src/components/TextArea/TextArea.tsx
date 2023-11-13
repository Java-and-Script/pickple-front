import { useForm } from 'react-hook-form';

import { Text } from '@components/shared/Text';

import { StyledSubTitle, StyledTextArea } from './TextArea.styles';

type textAreaProps = {
  title: string;
  inputLabel: string;
  inputOnChange?: (item: string) => void;
};

export const TextArea = ({
  title,
  inputLabel,
  inputOnChange,
}: textAreaProps) => {
  const { register } = useForm();

  return (
    <>
      <StyledSubTitle>
        <Text size={16} weight={300}>
          {title}
        </Text>
      </StyledSubTitle>
      <StyledTextArea
        {...register(inputLabel)}
        maxLength={1000}
        onChange={(event) => inputOnChange && inputOnChange(event.target.value)}
      />
    </>
  );
};

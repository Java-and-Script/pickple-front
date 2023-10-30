import { useForm } from 'react-hook-form';

import { Header } from '@components/shared/Header';
import { Input } from '@components/shared/Input';
import { Text } from '@components/shared/Text';

import {
  StyledContainer,
  StyledInput,
  StyledSubTitle,
  StyledTitle,
} from './CreateGamePage.styles';

export const CreateGamePage = () => {
  const { register } = useForm();

  return (
    <form>
      <StyledContainer>
        <Header title="게스트 모집하기" />
        <StyledTitle>
          <Text size={20} weight={700}>
            게스트 모집하기
          </Text>
        </StyledTitle>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            게스트 인원을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput>
          <Input
            {...register('guest-count')}
            border="1px solid #000"
            readOnly={true}
            borderRadius="5px"
            onClick={() => console.log('hi')}
          />
        </StyledInput>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            게스트 매치 날짜를 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput>
          <Input
            {...register('match-date')}
            border="1px solid #000"
            readOnly={true}
            borderRadius="5px"
          />
        </StyledInput>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 시작 시간을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput>
          <Input
            {...register('start-time')}
            border="1px solid #000"
            readOnly={true}
            borderRadius="5px"
          />
        </StyledInput>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 플레이타임을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput>
          <Input
            {...register('play-time')}
            border="1px solid #000"
            readOnly={true}
            borderRadius="5px"
          />
        </StyledInput>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            선호하는 포지션을 선택해 주세요!
          </Text>
        </StyledSubTitle>
      </StyledContainer>
    </form>
  );
};

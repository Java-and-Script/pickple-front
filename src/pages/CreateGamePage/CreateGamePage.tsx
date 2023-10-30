import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@components/shared/Button';
import { Header } from '@components/shared/Header';
import { Modal } from '@components/shared/Modal';
import { Text } from '@components/shared/Text';
import { ToggleButton } from '@components/shared/ToggleButton';
import { useToggleButtons } from '@components/shared/ToggleButton';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { theme } from '@styles/theme';

import {
  StyledContainer,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledInput,
  StyledPositionsWrapper,
  StyledSubTitle,
  StyledTitle,
} from './CreateGamePage.styles';

const PositionComponent = () => {
  const positions = ['C', 'PF', 'SF', 'PG', 'SG', '없음'];

  const [selectedPosition, setSelectedPosition] = useState<string[]>();

  const handledToggle = (value: string[]) => {
    setSelectedPosition(value);
  };

  const { handleToggle, selectedItems } = useToggleButtons({
    onToggle: handledToggle,
    isMultipleSelect: true,
  });

  console.log(selectedPosition);

  return (
    <StyledPositionsWrapper>
      {positions.map((position) => (
        <ToggleButton
          width="47px"
          height="32px"
          key={position}
          value={position}
          isActive={selectedItems.includes(position)}
          onToggle={handleToggle}
        />
      ))}
    </StyledPositionsWrapper>
  );
};

export const CreateGamePage = () => {
  const { register } = useForm();
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemSelected = (item: string) => {
    setSelectedItem(item);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledCreateForm>
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
        <StyledInput
          {...register('guest-count')}
          readOnly={true}
          onClick={openModal}
          value={selectedItem}
        />
        <Modal isOpen={isModalOpen} close={closeModal} header={true}>
          <VirtualScroll
            width="100%"
            list={[
              '1명',
              '2명',
              '3명',
              '4명',
              '5명',
              '6명',
              '7명',
              '8명',
              '9명',
              '10명',
              '11명',
              '12명',
              '13명',
              '14명',
              '15명',
            ]}
            onItemSelected={handleItemSelected}
          />
        </Modal>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            게스트 매치 날짜를 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('match-date')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 시작 시간을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('start-time')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 플레이타임을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            선호하는 포지션을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <PositionComponent />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            주소를 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            상세장소를 입력해 주세요! (ex. 1층 201호)
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            참가 비용을 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          onClick={() => console.log('hi')}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            상세설명을 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          height="340px"
          onClick={() => console.log('hi')}
        />
        <Button
          text={'모집하기'}
          width="100%"
          height="50px"
          fontSize="20px"
          fontWeight={700}
          textColor={'white'}
          backgroundColor={theme.PALETTE.RED_600}
          handleClick={() => {
            console.log('모집하기');
          }}
        />
        <StyledEmptyContainer />
      </StyledContainer>
    </StyledCreateForm>
  );
};

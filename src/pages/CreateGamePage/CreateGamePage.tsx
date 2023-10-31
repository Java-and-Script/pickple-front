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
  StyledTextArea,
  StyledTitle,
} from './CreateGamePage.styles';

const PositionComponent = ({
  setSelectedPosition,
}: {
  setSelectedPosition: (value: string[]) => void;
}) => {
  const positions = ['C', 'PF', 'SF', 'PG', 'SG', '없음'];

  const handledToggle = (value: string[]) => {
    setSelectedPosition(value);
  };

  const { handleToggle, selectedItems } = useToggleButtons({
    onToggle: handledToggle,
    isMultipleSelect: true,
  });

  return (
    <StyledPositionsWrapper>
      {positions.map((position) => (
        <ToggleButton
          type="button"
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
  const { register, handleSubmit } = useForm();

  const [selectedGuestCount, setSelectedGuestCount] = useState<string>('');
  const [selectedMatchDate, setSelectedMatchDate] = useState<string>('');
  const [selectedStartTime, setSelectedStartTime] = useState<string>('');
  const [selectedPlayTime, setSelectedPlayTime] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<string[]>([]);

  const [inputAddress, setInputAddress] = useState<string>('');
  const [inputAddressDetail, setInputAddressDetail] = useState<string>('');
  const [inputPrice, setInputPrice] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const [isGuestCountModalOpen, setIsGuestCountModalOpen] = useState(false);
  const [isMatchDateModalOpen, setIsMatchDateModalOpen] = useState(false);
  const [isStartTimeModalOpen, setIsStartTimeModalOpen] = useState(false);
  const [isPlayTimeModalOpen, setIsPlayTimeModalOpen] = useState(false);

  const onSubmit = () => {
    alert(
      JSON.stringify({
        selectedGuestCount,
        selectedMatchDate,
        selectedStartTime,
        selectedPlayTime,
        selectedPosition,
        inputAddress,
        inputAddressDetail,
        inputPrice,
        inputDescription,
      })
    );
  };

  const handleGuestCountSelect = (item: string) => {
    setSelectedGuestCount(item);
  };

  const openGuestCountModal = () => {
    setIsGuestCountModalOpen(true);
  };

  const closeGuestCountModal = () => {
    setIsGuestCountModalOpen(false);
  };

  const handleMatchDateSelect = (item: string) => {
    setSelectedMatchDate(item);
  };

  const openMatchDateModal = () => {
    setIsMatchDateModalOpen(true);
  };

  const closeMatchDateModal = () => {
    setIsMatchDateModalOpen(false);
  };

  const handleStartTimeSelect = (item: string) => {
    setSelectedStartTime(item);
  };

  const openStartTimeModal = () => {
    setIsStartTimeModalOpen(true);
  };

  const closeStartTimeModal = () => {
    setIsStartTimeModalOpen(false);
  };

  const handlePlayTimeSelect = (item: string) => {
    setSelectedPlayTime(item);
  };

  const openPlayTimeModal = () => {
    setIsPlayTimeModalOpen(true);
  };

  const closePlayTimeModal = () => {
    setIsPlayTimeModalOpen(false);
  };

  return (
    <StyledCreateForm onSubmit={handleSubmit(onSubmit)}>
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
          onClick={openGuestCountModal}
          value={selectedGuestCount}
        />
        <Modal
          isOpen={isGuestCountModalOpen}
          close={closeGuestCountModal}
          header={true}
        >
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
            onItemSelected={handleGuestCountSelect}
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
          onClick={openMatchDateModal}
          value={selectedMatchDate}
        />
        <Modal
          isOpen={isMatchDateModalOpen}
          close={closeMatchDateModal}
          header={true}
        >
          <VirtualScroll
            width="100%"
            list={[
              '2022년 9월 1일',
              '2022년 9월 2일',
              '2022년 9월 3일',
              '2022년 9월 4일',
              '2022년 9월 5일',
            ]}
            onItemSelected={handleMatchDateSelect}
          />
        </Modal>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 시작 시간을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('start-time')}
          readOnly={true}
          onClick={openStartTimeModal}
          value={selectedStartTime}
        />
        <Modal
          isOpen={isStartTimeModalOpen}
          close={closeStartTimeModal}
          header={true}
        >
          <VirtualScroll
            width="100%"
            list={[
              '09:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
            ]}
            onItemSelected={handleStartTimeSelect}
          />
        </Modal>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            경기 플레이타임을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('play-time')}
          readOnly={true}
          onClick={openPlayTimeModal}
          value={selectedPlayTime}
        />
        <Modal
          isOpen={isPlayTimeModalOpen}
          close={closePlayTimeModal}
          header={true}
        >
          <VirtualScroll
            width="100%"
            list={['30분', '60분', '90분', '120분', '150분', '180분', '210분']}
            onItemSelected={handlePlayTimeSelect}
          />
        </Modal>
        <StyledSubTitle>
          <Text size={16} weight={300}>
            선호하는 포지션을 선택해 주세요!
          </Text>
        </StyledSubTitle>
        <PositionComponent setSelectedPosition={setSelectedPosition} />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            주소를 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('address')}
          onChange={(e) => setInputAddress(e.target.value)}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            상세장소를 입력해 주세요! (ex. 1층 201호)
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('address-detail')}
          onChange={(e) => setInputAddressDetail(e.target.value)}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            참가 비용을 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledInput
          {...register('price')}
          type="number"
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <StyledSubTitle>
          <Text size={16} weight={300}>
            상세설명을 입력해 주세요!
          </Text>
        </StyledSubTitle>
        <StyledTextArea
          {...register('description')}
          onChange={(e) => setInputDescription(e.target.value)}
        />
        <Button
          text={'모집하기'}
          width="100%"
          height="50px"
          fontSize="20px"
          fontWeight={700}
          textColor={'white'}
          backgroundColor={theme.PALETTE.RED_600}
          handleClick={handleSubmit(onSubmit)}
        />
        <StyledEmptyContainer />
      </StyledContainer>
    </StyledCreateForm>
  );
};

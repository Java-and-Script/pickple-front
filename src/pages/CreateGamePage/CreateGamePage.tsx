import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';

import { CalendarComponent } from '@components/Calendar/Calendar';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { SelectPosition } from '@components/SelectPosition/SelectPosition';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useGameMutation } from '@hooks/mutations/useGameMutation';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { Position } from '@type/models/Position';

import {
  PageLayout,
  PageWrapper,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledInput,
  StyledModalHeader,
  StyledPositionsWrapper,
  StyledSubTitle,
  StyledTextArea,
  StyledTitle,
} from './CreateGamePage.styles';

export const CreateGamePage = () => {
  const { mutate } = useGameMutation();
  const { register, handleSubmit } = useForm();
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
  const [playDate, setPlayDate] = useState<string>('');
  const [playStartHour, setPlayStartHour] = useState<string>('00');
  const [playStartMinute, setPlayStartMinute] = useState<string>('00');
  const [playTimeMinutes, setPlayTimeMinutes] = useState<string>('');
  const [positions, setPositions] = useState<Position[]>([]);

  const [mainAddress, setMainAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isGuestCountModalOpen, setIsGuestCountModalOpen] = useState(false);
  const [isMatchDateModalOpen, setIsMatchDateModalOpen] = useState(false);
  const [isStartTimeModalOpen, setIsStartTimeModalOpen] = useState(false);
  const [isPlayTimeModalOpen, setIsPlayTimeModalOpen] = useState(false);

  const onSubmit = async () => {
    const gameData = {
      hostId: 1,
      maxMemberCount: parseInt(maxMemberCount),
      playDate,
      playStartTime: `${playStartHour}:${playStartMinute}`,
      playTimeMinutes: parseInt(playTimeMinutes),
      positions,
      mainAddress,
      detailAddress,
      cost: parseInt(cost),
      content,
    };

    mutate(gameData);
  };

  const handleAddressSelect = () => {
    new daum.Postcode({
      oncomplete: ({ address }: { address: string }) => {
        setMainAddress(address);
      },
    }).open();
  };

  const handleGuestCountSelect = (item: string) => {
    setMaxMemberCount(item);
  };

  const openGuestCountModal = () => {
    setIsGuestCountModalOpen(true);
  };

  const closeGuestCountModal = () => {
    setIsGuestCountModalOpen(false);
  };

  const openMatchDateModal = () => {
    setIsMatchDateModalOpen(true);
  };

  const closeMatchDateModal = () => {
    setIsMatchDateModalOpen(false);
  };

  const handleStartHourSelect = (item: string) => {
    setPlayStartHour(item);
  };

  const handleStartMinuteSelect = (item: string) => {
    setPlayStartMinute(item);
  };

  const openStartTimeModal = () => {
    setIsStartTimeModalOpen(true);
  };

  const closeStartTimeModal = () => {
    setIsStartTimeModalOpen(false);
  };

  const handlePlayTimeSelect = (item: string) => {
    setPlayTimeMinutes(item);
  };

  const openPlayTimeModal = () => {
    setIsPlayTimeModalOpen(true);
  };

  const closePlayTimeModal = () => {
    setIsPlayTimeModalOpen(false);
  };

  const StyledTimePicker = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? '게스트 모집하기' : ''} />
        <StyledCreateForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTitle>
            <div ref={entryRef}>
              <Text size={20} weight={700}>
                게스트 모집하기
              </Text>
            </div>
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
            value={maxMemberCount}
          />
          <Modal
            isOpen={isGuestCountModalOpen}
            close={closeGuestCountModal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                게스트 인원을 선택해 주세요!
              </Text>
            </StyledModalHeader>
            <Modal.Content>
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
            </Modal.Content>
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
            value={playDate}
          />
          <Modal
            isOpen={isMatchDateModalOpen}
            close={closeMatchDateModal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                게스트 매치 날짜를 선택해 주세요!
              </Text>
            </StyledModalHeader>
            <Modal.Content
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CalendarComponent setDate={setPlayDate} />
            </Modal.Content>
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
            value={`${playStartHour}시 ${playStartMinute}분`}
          />
          <Modal
            isOpen={isStartTimeModalOpen}
            close={closeStartTimeModal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                경기 시작 시간을 선택해 주세요!
              </Text>
            </StyledModalHeader>
            <Modal.Content>
              <StyledTimePicker>
                <VirtualScroll
                  width="50%"
                  list={[
                    '00',
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                  ]}
                  onItemSelected={handleStartHourSelect}
                />
                <VirtualScroll
                  width="50%"
                  list={[
                    '00',
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30',
                    '31',
                    '32',
                    '33',
                    '34',
                    '35',
                    '36',
                    '37',
                    '38',
                    '39',
                    '40',
                    '41',
                    '42',
                    '43',
                    '44',
                    '45',
                    '46',
                    '47',
                    '48',
                    '49',
                    '50',
                    '51',
                    '52',
                    '53',
                    '54',
                    '55',
                    '56',
                    '57',
                    '58',
                    '59',
                  ]}
                  onItemSelected={handleStartMinuteSelect}
                />
              </StyledTimePicker>
            </Modal.Content>
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
            value={playTimeMinutes}
          />
          <Modal
            isOpen={isPlayTimeModalOpen}
            close={closePlayTimeModal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                경기 플레이타임을 선택해 주세요!
              </Text>
            </StyledModalHeader>
            <Modal.Content>
              <VirtualScroll
                width="100%"
                list={[
                  '30분',
                  '60분',
                  '90분',
                  '120분',
                  '150분',
                  '180분',
                  '210분',
                  '240분',
                  '270분',
                  '300분',
                  '330분',
                  '360분',
                ]}
                onItemSelected={handlePlayTimeSelect}
              />
            </Modal.Content>
          </Modal>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              선호하는 포지션을 선택해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledPositionsWrapper>
            <SelectPosition setPositions={setPositions} />
          </StyledPositionsWrapper>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              주소를 입력해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register('address')}
            readOnly={true}
            onClick={handleAddressSelect}
            value={mainAddress}
          />
          <StyledSubTitle>
            <Text size={16} weight={300}>
              상세장소를 입력해 주세요! (ex. 1층 201호)
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register('address-detail')}
            onChange={(event) => setDetailAddress(event.target.value)}
          />
          <StyledSubTitle>
            <Text size={16} weight={300}>
              참가 비용을 입력해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register('price')}
            type="number"
            pattern="\d*"
            onChange={(event) => setCost(event.target.value)}
          />
          <StyledSubTitle>
            <Text size={16} weight={300}>
              상세설명을 입력해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledTextArea
            {...register('description')}
            onChange={(event) => setContent(event.target.value)}
          />
          <Button
            width="100%"
            height="50px"
            fontSize="20px"
            fontWeight={700}
            textColor={'white'}
            backgroundColor={theme.PALETTE.RED_600}
            onClick={handleSubmit(onSubmit)}
          >
            모집하기
          </Button>
          <StyledEmptyContainer />
        </StyledCreateForm>
      </PageWrapper>
    </PageLayout>
  );
};

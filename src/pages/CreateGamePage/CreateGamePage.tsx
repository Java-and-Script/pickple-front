import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { CalendarComponent } from '@components/Calendar';
import { ConditionalFormInput } from '@components/ConditionalFormInput';
import { Header } from '@components/Header';
import { SelectPosition } from '@components/SelectPosition/SelectPosition';
import { TextArea } from '@components/TextArea';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useGameMutation } from '@hooks/mutations/useGameMutation';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostGameRequest } from '@type/api/games';
import { Position } from '@type/models/Position';

import {
  MAX_MEMBER_COUNT_LIST,
  PLAY_TIME_LIST,
  START_TIME_HOUR_LIST,
  START_TIME_MINUTES_LIST,
} from '@consts/createGameOptions';
import { PATH_NAME } from '@consts/pathName';

import {
  PageLayout,
  PageWrapper,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledPositionsWrapper,
  StyledTimeColon,
  StyledTimeSelector,
  StyledTitle,
} from './CreateGamePage.styles';

export const CreateGamePage = () => {
  const navigate = useNavigate();

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const { mutate } = useGameMutation();
  const methods = useForm();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
  const [playDate, setPlayDate] = useState<string>('');
  const [playStartTimeHours, setStartTimeHours] = useState<string>('');
  const [playStartTimeMinutes, setStartTimeMinutes] = useState<string>('');
  const [playTimeMinutes, setPlayTimeMinutes] = useState<string>('');
  const [positions, setPositions] = useState<Position[]>([]);
  const [mainAddress, setMainAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [cost, setCost] = useState<string>('0');
  const [content, setContent] = useState<string>('');

  const [isGuestCountModalOpen, setIsGuestCountModalOpen] = useState(false);
  const [isMatchDateModalOpen, setIsMatchDateModalOpen] = useState(false);
  const [isStartTimeModalOpen, setIsStartTimeModalOpen] = useState(false);
  const [isPlayTimeModalOpen, setIsPlayTimeModalOpen] = useState(false);

  const onSubmit = () => {
    const gameData: PostGameRequest = {
      maxMemberCount: parseInt(maxMemberCount),
      playDate,
      playStartTime: `${playStartTimeHours}:${playStartTimeMinutes}`,
      playTimeMinutes: parseInt(playTimeMinutes),
      positions,
      mainAddress,
      detailAddress,
      cost: parseInt(cost),
      content,
    };

    mutate(gameData, {
      onSuccess: ({ gameId }) => {
        navigate(PATH_NAME.GET_GAMES_PATH(String(gameId)));
      },
    });
  };

  const handleAddressSelect = () => {
    new daum.Postcode({
      oncomplete: ({ address }: { address: string }) => {
        setMainAddress(address);
      },
    }).open();
  };

  const handleCost = (item: string) => {
    if (parseInt(item) < 0) {
      setCost('0');
    } else if (parseInt(item) > 100000) {
      setCost('100000');
    } else setCost(item);
  };

  const toggleGuestCountModal = () => {
    setIsGuestCountModalOpen((prev) => !prev);
  };

  const toggleMatchDateModal = () => {
    setIsMatchDateModalOpen((prev) => !prev);
  };

  const toggleStartTimeModal = () => {
    setIsStartTimeModalOpen((prev) => !prev);
  };

  const togglePlayTimeModal = () => {
    setIsPlayTimeModalOpen((prev) => !prev);
  };

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? '게스트 모집하기' : ''} />
        <FormProvider {...methods}>
          <StyledCreateForm onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledTitle>
              <div ref={entryRef}>
                <Text size={20} weight={700}>
                  게스트 모집하기
                </Text>
              </div>
            </StyledTitle>
            <ConditionalFormInput
              title="게스트 인원을 선택해 주세요!"
              readOnly={true}
              isContainModal={true}
              inputLabel="guest-count"
              onClick={toggleGuestCountModal}
              value={maxMemberCount}
              isModalOpen={isGuestCountModalOpen}
              closeModal={toggleGuestCountModal}
            >
              <VirtualScroll
                width="100%"
                list={[...MAX_MEMBER_COUNT_LIST]}
                onItemSelected={setMaxMemberCount}
              />
            </ConditionalFormInput>
            <ConditionalFormInput
              title="경기 날짜를 선택해 주세요!"
              readOnly={true}
              isContainModal={true}
              inputLabel="match-date"
              onClick={toggleMatchDateModal}
              value={playDate}
              isModalOpen={isMatchDateModalOpen}
              closeModal={toggleMatchDateModal}
            >
              <CalendarComponent setDate={setPlayDate} />
            </ConditionalFormInput>
            <ConditionalFormInput
              title="경기 시작 시간을 선택해 주세요!"
              readOnly={true}
              isContainModal={true}
              inputLabel="start-time"
              onClick={toggleStartTimeModal}
              value={`${playStartTimeHours}:${playStartTimeMinutes}`}
              isModalOpen={isStartTimeModalOpen}
              closeModal={toggleStartTimeModal}
            >
              <StyledTimeSelector>
                <VirtualScroll
                  width="20%"
                  list={[...START_TIME_HOUR_LIST]}
                  onItemSelected={setStartTimeHours}
                />
                <StyledTimeColon>{':'}</StyledTimeColon>
                <VirtualScroll
                  width="20%"
                  list={[...START_TIME_MINUTES_LIST]}
                  onItemSelected={setStartTimeMinutes}
                />
              </StyledTimeSelector>
            </ConditionalFormInput>
            <ConditionalFormInput
              title="경기 플레이타임을 선택해 주세요!"
              readOnly={true}
              isContainModal={true}
              inputLabel="play-time"
              onClick={togglePlayTimeModal}
              value={playTimeMinutes}
              isModalOpen={isPlayTimeModalOpen}
              closeModal={togglePlayTimeModal}
            >
              <VirtualScroll
                width="100%"
                list={[...PLAY_TIME_LIST]}
                onItemSelected={setPlayTimeMinutes}
              />
            </ConditionalFormInput>
            <Text size={16} weight={300}>
              선호하는 포지션을 선택해 주세요!
            </Text>
            <StyledPositionsWrapper>
              <SelectPosition setPositions={setPositions} />
            </StyledPositionsWrapper>
            <ConditionalFormInput
              title="주소를 입력해 주세요!"
              isRequired={true}
              readOnly={true}
              isContainModal={false}
              inputLabel="address"
              onClick={handleAddressSelect}
              value={mainAddress}
            />
            <ConditionalFormInput
              isRequired={true}
              title="상세장소를 입력해 주세요!"
              isContainModal={false}
              inputLabel="address-detail"
              inputOnChange={setDetailAddress}
              value={detailAddress}
            />
            <ConditionalFormInput
              title="참가비용을 입력해 주세요!"
              isContainModal={false}
              inputLabel="cost"
              inputOnChange={handleCost}
              value={cost}
              type="number"
              pattern="\d*"
              min={'0'}
              step={1000}
              max={'100000'}
            />
            <TextArea
              title="상세설명을 입력해 주세요!"
              inputLabel="content"
              inputOnChange={setContent}
            />
            <Button
              width="100%"
              height="50px"
              fontSize="20px"
              fontWeight={700}
              textColor={'white'}
              backgroundColor={theme.PALETTE.RED_600}
              type="submit"
            >
              모집하기
            </Button>
            <StyledEmptyContainer />
          </StyledCreateForm>
        </FormProvider>
      </PageWrapper>
    </PageLayout>
  );
};

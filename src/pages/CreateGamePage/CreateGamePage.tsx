import { FormProvider } from 'react-hook-form';

import {
  CREATE_GAME_STRINGS,
  MAX_MEMBER_COUNT_LIST,
  PLAY_TIME_LIST,
  START_TIME_HOUR_LIST,
  START_TIME_MINUTES_LIST,
} from '@pages/CreateGamePage/consts/createGameOptions';

import { CalendarComponent } from '@components/Calendar';
import { ConditionalFormInput } from '@components/ConditionalFormInput';
import { Header } from '@components/Header';
import { SelectPosition } from '@components/SelectPosition/SelectPosition';
import { TextArea } from '@components/TextArea';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

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
import { useCreateGamePage } from './useCreateGamePage';

export const CreateGamePage = () => {
  const {
    state,
    methods,
    onSubmit,
    handleAddressSelect,
    handleCost,
    toggleGuestCountModal,
    toggleMatchDateModal,
    toggleStartTimeModal,
    togglePlayTimeModal,
    setMaxMemberCount,
    setPlayDate,
    setPlayStartTimeHours,
    setPlayStartTimeMinutes,
    setPlayTimeMinutes,
    setPositions,
    setDetailAddress,
    setContent,
  } = useCreateGamePage();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const {
    maxMemberCount,
    playDate,
    playStartTimeHours,
    playStartTimeMinutes,
    playTimeMinutes,
    mainAddress,
    detailAddress,
    cost,
    isGuestCountModalOpen,
    isMatchDateModalOpen,
    isStartTimeModalOpen,
    isPlayTimeModalOpen,
  } = state;

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? CREATE_GAME_STRINGS.TITLE : ''} />
        <FormProvider {...methods}>
          <StyledCreateForm onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledTitle>
              <div ref={entryRef}>
                <Text size={20} weight={700}>
                  {CREATE_GAME_STRINGS.TITLE}
                </Text>
              </div>
            </StyledTitle>
            <ConditionalFormInput
              title={CREATE_GAME_STRINGS.GUEST_COUNT}
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
              title={CREATE_GAME_STRINGS.MATCH_DATE}
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
              title={CREATE_GAME_STRINGS.START_TIME}
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
                  onItemSelected={setPlayStartTimeHours}
                />
                <StyledTimeColon>{':'}</StyledTimeColon>
                <VirtualScroll
                  width="20%"
                  list={[...START_TIME_MINUTES_LIST]}
                  onItemSelected={setPlayStartTimeMinutes}
                />
              </StyledTimeSelector>
            </ConditionalFormInput>
            <ConditionalFormInput
              title={CREATE_GAME_STRINGS.PLAY_TIME}
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
              {CREATE_GAME_STRINGS.POSITION}
            </Text>
            <StyledPositionsWrapper>
              <SelectPosition setPositions={setPositions} />
            </StyledPositionsWrapper>
            <ConditionalFormInput
              title={CREATE_GAME_STRINGS.MAIN_ADDRESS}
              isRequired={true}
              readOnly={true}
              isContainModal={false}
              inputLabel="address"
              onClick={handleAddressSelect}
              value={mainAddress}
            />
            <ConditionalFormInput
              isRequired={true}
              title={CREATE_GAME_STRINGS.DETAIL_ADDRESS}
              isContainModal={false}
              inputLabel="address-detail"
              inputOnChange={setDetailAddress}
              value={detailAddress}
            />
            <ConditionalFormInput
              title={CREATE_GAME_STRINGS.COST}
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
              title={CREATE_GAME_STRINGS.CONTENT}
              inputLabel="content"
              inputOnChange={setContent}
              defaultValue="같이 즐거운 경기해요~!"
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
              {CREATE_GAME_STRINGS.CREATE}
            </Button>
            <StyledEmptyContainer />
          </StyledCreateForm>
        </FormProvider>
      </PageWrapper>
    </PageLayout>
  );
};

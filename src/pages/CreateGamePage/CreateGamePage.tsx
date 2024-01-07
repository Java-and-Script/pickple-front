import { FormProvider } from 'react-hook-form';

import {
  CREATE_GAME_STRINGS,
  MAX_MEMBER_COUNT_LIST,
  PLAY_TIME_LIST,
  START_TIME_HOUR_LIST,
  START_TIME_MINUTES_LIST,
} from '@pages/CreateGamePage/constants/createGameOptions';

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
import { useCreateGamePage } from './hooks/useCreateGamePage';

export const CreateGamePage = () => {
  const {
    state,
    methods,
    onSubmit,
    handleAddressSelect,
    toggleGuestCountModal,
    toggleMatchDateModal,
    toggleStartTimeModal,
    togglePlayTimeModal,
    setPlayDate,
    setPositions,
    handleMaxMemberCount,
    handlePlayStartTimeHours,
    handlePlayStartTimeMinutes,
    handlePlayTimeMinutes,
  } = useCreateGamePage();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const {
    maxMemberCount,
    playDate,
    playStartTimeHours,
    playStartTimeMinutes,
    playTimeMinutes,
    mainAddress,
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
          <StyledCreateForm onSubmit={onSubmit}>
            <StyledTitle>
              <div ref={entryRef}>
                <Text size={20} weight={700}>
                  {CREATE_GAME_STRINGS.TITLE}
                </Text>
              </div>
            </StyledTitle>
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.GUEST_COUNT}
              readOnly={true}
              isContainModal={true}
              name="maxMemberCount"
              onClick={toggleGuestCountModal}
              value={maxMemberCount}
              isModalOpen={isGuestCountModalOpen}
              closeModal={toggleGuestCountModal}
              register={methods.register}
            >
              <VirtualScroll
                width="100%"
                list={[...MAX_MEMBER_COUNT_LIST]}
                onItemSelected={handleMaxMemberCount}
              />
            </ConditionalFormInput>
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.MATCH_DATE}
              readOnly={true}
              isContainModal={true}
              name="playDate"
              onClick={toggleMatchDateModal}
              value={playDate}
              isModalOpen={isMatchDateModalOpen}
              closeModal={toggleMatchDateModal}
              register={methods.register}
            >
              <CalendarComponent setDate={setPlayDate} />
            </ConditionalFormInput>
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.START_TIME}
              readOnly={true}
              isContainModal={true}
              name="playStartTime"
              onClick={toggleStartTimeModal}
              value={`${playStartTimeHours}:${playStartTimeMinutes}`}
              isModalOpen={isStartTimeModalOpen}
              closeModal={toggleStartTimeModal}
              register={methods.register}
            >
              <StyledTimeSelector>
                <VirtualScroll
                  width="20%"
                  list={[...START_TIME_HOUR_LIST]}
                  onItemSelected={handlePlayStartTimeHours}
                />
                <StyledTimeColon>{':'}</StyledTimeColon>
                <VirtualScroll
                  width="20%"
                  list={[...START_TIME_MINUTES_LIST]}
                  onItemSelected={handlePlayStartTimeMinutes}
                />
              </StyledTimeSelector>
            </ConditionalFormInput>
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.PLAY_TIME}
              readOnly={true}
              isContainModal={true}
              name="playTimeMinutes"
              onClick={togglePlayTimeModal}
              value={playTimeMinutes}
              isModalOpen={isPlayTimeModalOpen}
              closeModal={togglePlayTimeModal}
              register={methods.register}
            >
              <VirtualScroll
                width="100%"
                list={[...PLAY_TIME_LIST]}
                onItemSelected={handlePlayTimeMinutes}
              />
            </ConditionalFormInput>
            <Text size={16} weight={300}>
              {CREATE_GAME_STRINGS.POSITION}
            </Text>
            <StyledPositionsWrapper>
              <SelectPosition setPositions={setPositions} />
            </StyledPositionsWrapper>
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.MAIN_ADDRESS}
              required={true}
              readOnly={true}
              name="mainAddress"
              onClick={handleAddressSelect}
              value={mainAddress}
              register={methods.register}
            />
            <ConditionalFormInput
              required={true}
              label={CREATE_GAME_STRINGS.DETAIL_ADDRESS}
              name="detailAddress"
              register={methods.register}
            />
            <ConditionalFormInput
              label={CREATE_GAME_STRINGS.COST}
              name="cost"
              type="number"
              pattern="\d*"
              min={0}
              step={1000}
              max={100000}
              register={methods.register}
            />
            <TextArea
              label={CREATE_GAME_STRINGS.CONTENT}
              name="content"
              register={methods.register}
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

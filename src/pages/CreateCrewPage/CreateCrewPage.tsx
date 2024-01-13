import { FormProvider } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';

import { MAX_MEMBER_COUNT_LIST } from '@pages/CreateCrewPage/constants/createCrewOptions';
import { CREATE_CREW_STRINGS } from '@pages/CreateCrewPage/constants/createCrewOptions';

import { ConditionalFormInput } from '@components/ConditionalFormInput';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
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
  StyledModalContent,
  StyledModalHeader,
  StyledSelectBox,
  StyledSelectedLocationButton,
  StyledTitle,
  StyledToggleButton,
} from './CreateCrewPage.styles';
import { useCreateCrewPage } from './hooks/useCreateCrewPage';

export const CreateCrewPage = () => {
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();
  const {
    state,
    methods,
    locations,
    onSubmit,
    handleMaxMemberCount,
    handleToggleLocation,
    toggleMaxMemberCountModal,
    toggleAddressDepth2Modal,
  } = useCreateCrewPage();

  const {
    selectedLocation,
    selectedLocations,
    isOpenMaxMemberCountModal,
    isOpenAddressDepth2Modal,
  } = state;

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? CREATE_CREW_STRINGS.TITLE : ''} />
        <FormProvider {...methods}>
          <StyledCreateForm onSubmit={onSubmit}>
            <StyledTitle>
              <div ref={entryRef}>
                <Text size={20} weight={700}>
                  {CREATE_CREW_STRINGS.TITLE}
                </Text>
              </div>
            </StyledTitle>
            <ConditionalFormInput
              label={CREATE_CREW_STRINGS.CREW_NAME}
              name="name"
              register={methods.register}
              required={true}
              minLength={1}
              maxLength={20}
            />
            <ConditionalFormInput
              label={CREATE_CREW_STRINGS.CREW_MEMBER_COUNT}
              name="maxMemberCount"
              register={methods.register}
              isContainModal={true}
              isModalOpen={isOpenMaxMemberCountModal}
              closeModal={toggleMaxMemberCountModal}
              onClick={toggleMaxMemberCountModal}
            >
              <VirtualScroll
                width="100%"
                list={[...MAX_MEMBER_COUNT_LIST]}
                onItemSelected={handleMaxMemberCount}
              />
            </ConditionalFormInput>
            <Text size={16} weight={300}>
              {CREATE_CREW_STRINGS.CREW_LOCATION}
            </Text>
            <StyledSelectedLocationButton
              min-width="72px"
              height="32px"
              fontSize="6px"
              {...theme.BUTTON_PROPS.SMALL_GRAY_OUTLINED_BUTTON_PROPS}
              type="button"
              isSelected={selectedLocation?.[0]}
              onClick={toggleAddressDepth2Modal}
            >
              {selectedLocation ?? CREATE_CREW_STRINGS.DEFAULT_LOCATION}
            </StyledSelectedLocationButton>
            <Modal
              isOpen={isOpenAddressDepth2Modal}
              close={toggleAddressDepth2Modal}
              header={true}
            >
              <StyledModalHeader>
                <Text size={20} weight={700}>
                  {CREATE_CREW_STRINGS.CREW_LOCATION}
                </Text>
              </StyledModalHeader>
              <StyledModalContent>
                <StyledSelectBox border="none">
                  {locations.addressDepth2List.map((location) => (
                    <StyledToggleButton
                      key={location}
                      value={location}
                      isActive={selectedLocations.includes(location)}
                      border="none"
                      onToggle={handleToggleLocation}
                    />
                  ))}
                </StyledSelectBox>
              </StyledModalContent>
            </Modal>
            <TextArea
              label={CREATE_CREW_STRINGS.CREW_DESCRIPTION}
              register={methods.register}
              name="content"
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
              {CREATE_CREW_STRINGS.CREATE}
            </Button>
            <StyledEmptyContainer />
          </StyledCreateForm>
        </FormProvider>
        <DevTool control={methods.control} />
      </PageWrapper>
    </PageLayout>
  );
};

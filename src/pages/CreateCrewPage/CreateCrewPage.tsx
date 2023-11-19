import { FormProvider } from 'react-hook-form';

import { MAX_MEMBER_COUNT_LIST } from '@pages/CreateCrewPage/consts/createCrewOptions';

import { ConditionalFormInput } from '@components/ConditionalFormInput';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { TextArea } from '@components/TextArea';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { SEOUL } from '@consts/location';

import {
  PageLayout,
  PageWrapper,
  ScrollBox,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledModalContent,
  StyledModalHeader,
  StyledSelectBox,
  StyledSelectedLocationButton,
  StyledTitle,
  StyledToggleButton,
} from './CreateCrewPage.styles';
import { useCreateCrewPage } from './useCreateCrewPage';

export const CreateCrewPage = () => {
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();
  const {
    state,
    methods,
    onSubmit,
    setName,
    setContent,
    setMaxMemberCount,
    handleToggleLocation,
    toggleMaxMemberCountModal,
    toggleAddressDepth2Modal,
  } = useCreateCrewPage();

  const {
    name,
    maxMemberCount,
    selectedLocation,
    selectedLocations,
    isOpenMaxMemberCountModal,
    isOpenAddressDepth2Modal,
  } = state;

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? '크루 만들기' : ''} />
        <FormProvider {...methods}>
          <StyledCreateForm onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledTitle>
              <div ref={entryRef}>
                <Text size={20} weight={700}>
                  크루 만들기
                </Text>
              </div>
            </StyledTitle>
            <ConditionalFormInput
              title="크루 이름을 입력해 주세요!"
              isRequired={true}
              isContainModal={false}
              inputLabel="crew-name"
              inputOnChange={setName}
              value={name}
              minLength={1}
              maxLength={20}
            />
            <ConditionalFormInput
              title="크루의 최대 인원을 선택해 주세요!"
              readOnly={true}
              isContainModal={true}
              inputLabel="crew-count"
              onClick={toggleMaxMemberCountModal}
              value={maxMemberCount}
              isModalOpen={isOpenMaxMemberCountModal}
              closeModal={toggleMaxMemberCountModal}
            >
              <VirtualScroll
                width="100%"
                list={[...MAX_MEMBER_COUNT_LIST]}
                onItemSelected={setMaxMemberCount}
              />
            </ConditionalFormInput>
            <Text size={16} weight={300}>
              주로 활동하는 지역을 선택해 주세요!
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
              {selectedLocation ?? '지역'}
            </StyledSelectedLocationButton>
            <Modal
              isOpen={isOpenAddressDepth2Modal}
              close={toggleAddressDepth2Modal}
              header={true}
            >
              <StyledModalHeader>
                <Text size={20} weight={700}>
                  주로 활동하는 지역을 선택해 주세요!
                </Text>
              </StyledModalHeader>
              <StyledModalContent>
                <ScrollBox>
                  <StyledSelectBox border="none">
                    {Object.values(SEOUL).map((location) => (
                      <StyledToggleButton
                        key={location}
                        value={location}
                        isActive={selectedLocations.includes(location)}
                        border="none"
                        onToggle={handleToggleLocation}
                      />
                    ))}
                  </StyledSelectBox>
                </ScrollBox>
              </StyledModalContent>
            </Modal>
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
              만들기
            </Button>
            <StyledEmptyContainer />
          </StyledCreateForm>
        </FormProvider>
      </PageWrapper>
    </PageLayout>
  );
};

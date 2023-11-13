import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ConditionalFormInput } from '@components/ConditionalFormInput';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { TextArea } from '@components/TextArea';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import { useToggleButtons } from '@components/shared/ToggleButton';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useCrewMutation } from '@hooks/mutations/useCrewMutation';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostCrewRequest } from '@type/api/crews';

import { MAX_MEMBER_COUNT_LIST } from '@consts/createCrewOptions';
import { SEOUL } from '@consts/location';
import { PATH_NAME } from '@consts/pathName';

import {
  PageLayout,
  PageWrapper,
  ScrollBox,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledModalHeader,
  StyledSelectBox,
  StyledSelectedLocationButton,
  StyledTitle,
  StyledToggleButton,
} from './CreateCrewPage.styles';

export const CreateCrewPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }
  const navigate = useNavigate();

  const { mutate } = useCrewMutation();
  const methods = useForm();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string[]>();

  const [isOpenMaxMemberCountModal, setIsOpenMaxMemberCountModal] =
    useState(false);
  const [isOpenAddressDepth2Modal, setIsOpenAddressDepth2Modal] =
    useState(false);

  const {
    handleToggle: handleToggleLocation,
    selectedItems: selectedLocations,
  } = useToggleButtons({
    onToggle: setSelectedLocation,
    isMultipleSelect: false,
  });

  const toggleMaxMemberCountModal = () => {
    setIsOpenMaxMemberCountModal((prev) => !prev);
  };

  const toggleAddressDepth2Modal = () => {
    setIsOpenAddressDepth2Modal((prev) => !prev);
  };

  const onSubmit = () => {
    const data: PostCrewRequest = {
      name,
      content,
      maxMemberCount: parseInt(maxMemberCount),
      addressDepth1: '서울시',
      addressDepth2: selectedLocation![0],
    };

    mutate(data, {
      onSuccess: ({ crewId }) => {
        navigate(PATH_NAME.GET_CREWS_PATH(String(crewId)));
      },
    });
  };

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
              <Modal.Content
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
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
              </Modal.Content>
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

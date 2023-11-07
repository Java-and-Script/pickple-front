import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import {
  ToggleButton,
  useToggleButtons,
} from '@components/shared/ToggleButton';
import { VirtualScroll } from '@components/shared/VirtualScroll';

import { useCrewMutation } from '@hooks/mutations/usePostMutation';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { theme } from '@styles/theme';

import { SEOUL } from '@consts/location';

import {
  PageLayout,
  PageWrapper,
  ScrollBox,
  StyledCreateForm,
  StyledEmptyContainer,
  StyledInput,
  StyledModalHeader,
  StyledSelectedLocationButton,
  StyledSubTitle,
  StyledTextArea,
  StyledTitle,
} from './CreateCrewPage.styles';

export const CreateCrewPage = () => {
  const { mutate } = useCrewMutation();
  const { register, handleSubmit } = useForm();
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const [selectedLocation, setSelectedLocation] = useState<string[]>();
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
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

  const openMaxMemberCountModal = () => {
    setIsOpenMaxMemberCountModal(true);
  };

  const closeMaxMemberCountModal = () => {
    setIsOpenMaxMemberCountModal(false);
  };

  const openAddressDepth2Modal = () => {
    setIsOpenAddressDepth2Modal(true);
  };

  const closeAddressDepth2Modal = () => {
    setIsOpenAddressDepth2Modal(false);
  };

  const handleMaxMemberCountSelect = (item: string) => {
    setMaxMemberCount(item);
  };

  const onSubmit = async () => {
    const data = {
      name,
      content,
      maxMemberCount: parseInt(maxMemberCount),
      leaderId: 1,
      addressDepth1: '서울시',
      addressDepth2: selectedLocation![0],
    };

    mutate(data);
  };

  return (
    <PageLayout>
      <PageWrapper>
        <Header title={showHeaderTitle ? '크루 만들기' : ''} />
        <StyledCreateForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTitle>
            <div ref={entryRef}>
              <Text size={20} weight={700}>
                크루 만들기
              </Text>
            </div>
          </StyledTitle>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              크루 이름을 입력해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register('crew-name')}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <StyledSubTitle>
            <Text size={16} weight={300}>
              크루의 최대 인원을 선택해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledInput
            {...register('crew-count')}
            readOnly={true}
            onClick={openMaxMemberCountModal}
            value={maxMemberCount}
          />
          <Modal
            isOpen={isOpenMaxMemberCountModal}
            close={closeMaxMemberCountModal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                크루의 최대 인원을 선택해 주세요!
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
                  '16명',
                  '17명',
                  '18명',
                  '19명',
                  '20명',
                  '21명',
                  '22명',
                  '23명',
                  '24명',
                  '25명',
                  '26명',
                  '27명',
                  '28명',
                  '29명',
                  '30명',
                ]}
                onItemSelected={handleMaxMemberCountSelect}
              />
            </Modal.Content>
          </Modal>
          <StyledSubTitle>
            <Text size={16} weight={300}>
              주로 활동하는 지역을 선택해 주세요!
            </Text>
          </StyledSubTitle>
          <StyledSelectedLocationButton
            width="72px"
            height="32px"
            fontSize="6px"
            {...theme.BUTTON_PROPS.SMALL_GRAY_OUTLINED_BUTTON_PROPS}
            type="button"
            isSelected={selectedLocation?.[0]}
            onClick={openAddressDepth2Modal}
          >
            {selectedLocation ?? '지역'}
          </StyledSelectedLocationButton>
          <Modal
            isOpen={isOpenAddressDepth2Modal}
            close={closeAddressDepth2Modal}
            header={true}
          >
            <StyledModalHeader>
              <Text size={20} weight={700}>
                주로 활동하는 지역을 선택해 주세요!
              </Text>
            </StyledModalHeader>
            <Modal.Content>
              <ScrollBox>
                <SelectBox border="none">
                  {Object.values(SEOUL).map((location) => (
                    <ToggleButton
                      key={location}
                      value={location}
                      isActive={selectedLocations.includes(location)}
                      border="none"
                      onToggle={handleToggleLocation}
                    />
                  ))}
                </SelectBox>
              </ScrollBox>
            </Modal.Content>
          </Modal>
          <StyledEmptyContainer />
          <StyledTextArea
            {...register('content')}
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
            만들기
          </Button>
        </StyledCreateForm>
      </PageWrapper>
    </PageLayout>
  );
};

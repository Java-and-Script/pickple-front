import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { CREATE_CREW_ERROR_MESSAGE } from '@pages/CreateCrewPage/constants/createCrewOptions';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useToggleButtons } from '@components/shared/ToggleButton';

import { useCrewMutation } from '@hooks/crews/useCrewMutation';
import { useLocationsQuery } from '@hooks/data/useLocationsQuery';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostCrewRequest } from '@type/api/crews';

import { PATH_NAME } from '@constants/pathName';

export const useCreateCrewPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }

  const navigate = useNavigate();
  const { data: locations } = useLocationsQuery();
  const { mutate } = useCrewMutation();

  const methods = useForm();
  const { handleSubmit } = methods;

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

  const handleMaxMemberCount = (maxMemberCount: string) => {
    isOpenMaxMemberCountModal || setMaxMemberCount(maxMemberCount);
  };

  const onSubmit = handleSubmit((data: FieldValues) => {
    const addressDepth2 = selectedLocation![0];
    const { name, content } = data;
    const crewData: PostCrewRequest = {
      name,
      content,
      maxMemberCount: parseInt(maxMemberCount),
      addressDepth1: '서울시',
      addressDepth2,
    };
    mutate(crewData, {
      onSuccess: ({ crewId }) => {
        navigate(PATH_NAME.GET_CREWS_PATH(String(crewId)));
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response?.data.code === 'CRE-012') {
            return toast.error(
              CREATE_CREW_ERROR_MESSAGE.MAX_CREW_LIMIT_EXCEEDED
            );
          }
          if (error.response?.data.code === 'CRE-002') {
            return toast.error(CREATE_CREW_ERROR_MESSAGE.DUPLICATE_CREW_NAME);
          }
        }
      },
    });
  });

  return {
    state: {
      maxMemberCount,
      selectedLocation,
      selectedLocations,
      isOpenMaxMemberCountModal,
      isOpenAddressDepth2Modal,
    },
    locations,
    methods,
    onSubmit,
    handleMaxMemberCount,
    handleToggleLocation,
    toggleMaxMemberCountModal,
    toggleAddressDepth2Modal,
  };
};

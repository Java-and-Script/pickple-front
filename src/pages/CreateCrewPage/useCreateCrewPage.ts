import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { useToggleButtons } from '@components/shared/ToggleButton';

import { useCrewMutation } from '@hooks/mutations/useCrewMutation';
import { useLocationsQuery } from '@hooks/queries/useLocationsQuery';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostCrewRequest } from '@type/api/crews';

import { PATH_NAME } from '@consts/pathName';

export const useCreateCrewPage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const navigate = useNavigate();
  const { data: locations } = useLocationsQuery();

  const { mutate } = useCrewMutation();
  const methods = useForm();

  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string[]>();

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
      onError: (data) => {
        if (data instanceof AxiosError) {
          data.response?.data.code === 'CRE-002' &&
            toast.error('중복된 크루 이름 입니다.');
        }
      },
    });
  };

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

  return {
    state: {
      name,
      maxMemberCount,
      selectedLocation,
      selectedLocations,
      isOpenMaxMemberCountModal,
      isOpenAddressDepth2Modal,
    },
    methods,
    locations,
    onSubmit,
    setName,
    setContent,
    setMaxMemberCount,
    handleToggleLocation,
    toggleMaxMemberCountModal,
    toggleAddressDepth2Modal,
  };
};

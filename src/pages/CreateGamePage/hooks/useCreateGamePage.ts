import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useGameMutation } from '@hooks/games/useGameMutation';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostGameRequest } from '@type/api/games';
import { Position } from '@type/models/Position';

import { PATH_NAME } from '@constants/pathName';

import { validateStartTime } from '../utils/validateStartTime';

export const useCreateGamePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }

  const { mutate } = useGameMutation();
  const navigate = useNavigate();

  const methods = useForm();
  const { handleSubmit, setValue, getValues } = methods;
  const [positions, setPositions] = useState<Position[]>([]);

  const [isGuestCountModalOpen, setIsGuestCountModalOpen] =
    useState<boolean>(false);
  const [isMatchDateModalOpen, setIsMatchDateModalOpen] =
    useState<boolean>(false);
  const [isStartTimeModalOpen, setIsStartTimeModalOpen] =
    useState<boolean>(false);
  const [isPlayTimeModalOpen, setIsPlayTimeModalOpen] =
    useState<boolean>(false);

  const handleMaxMemberCount = (maxMemberCount: string) => {
    isGuestCountModalOpen || setValue('maxMemberCount', maxMemberCount);
  };

  const handlePlayStartTimeHours = (playStartTimeHours: string) => {
    isStartTimeModalOpen || setValue('playStartTimeHours', playStartTimeHours);
  };

  const handlePlayStartTimeMinutes = (playStartTimeMinutes: string) => {
    isStartTimeModalOpen ||
      setValue('playStartTimeMinutes', playStartTimeMinutes);
  };

  const handlePlayTimeMinutes = (playTimeMinutes: string) => {
    isPlayTimeModalOpen || setValue('playTimeMinutes', playTimeMinutes);
  };

  const handlePlayDate = (playDate: string) => {
    setValue('playDate', playDate);
  };

  const handleAddressSelect = () => {
    new daum.Postcode({
      oncomplete: ({ address }: { address: string }) => {
        setValue('mainAddress', address);
      },
    }).open();
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

  useEffect(() => {
    isStartTimeModalOpen ||
      setValue(
        'playStartTime',
        `${getValues('playStartTimeHours')}:${getValues(
          'playStartTimeMinutes'
        )}`
      );
  }, [getValues, setValue, isStartTimeModalOpen]);

  const onSubmit = handleSubmit((data: FieldValues) => {
    const {
      detailAddress,
      cost,
      content,
      maxMemberCount,
      playDate,
      playStartTimeHours,
      playStartTimeMinutes,
      mainAddress,
      playTimeMinutes,
    } = data;
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

    if (
      !validateStartTime({ playDate, playStartTimeHours, playStartTimeMinutes })
    ) {
      toast.error('현재시간 이전의 경기는\n생성할 수 없습니다.');
      throw new Error();
    }

    mutate(gameData, {
      onSuccess: ({ gameId }) => {
        navigate(PATH_NAME.GET_GAMES_PATH(String(gameId)));
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          error.response?.data.code === 'ADD-001' &&
            toast.error('서울시만 서비스중입니다.');
        }
      },
    });
  });

  return {
    state: {
      isGuestCountModalOpen,
      isMatchDateModalOpen,
      isStartTimeModalOpen,
      isPlayTimeModalOpen,
    },
    methods,
    onSubmit,
    handleAddressSelect,
    toggleGuestCountModal,
    toggleMatchDateModal,
    toggleStartTimeModal,
    togglePlayTimeModal,
    setPositions,
    handleMaxMemberCount,
    handlePlayStartTimeHours,
    handlePlayStartTimeMinutes,
    handlePlayTimeMinutes,
    handlePlayDate,
  };
};

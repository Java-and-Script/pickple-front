import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { useGameMutation } from '@hooks/mutations/useGameMutation';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PostGameRequest } from '@type/api/games';
import { Position } from '@type/models/Position';

import { PATH_NAME } from '@consts/pathName';

export const useCreateGamePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }
  const { mutate } = useGameMutation();
  const navigate = useNavigate();
  const methods = useForm();

  const [maxMemberCount, setMaxMemberCount] = useState<string>('');
  const [playDate, setPlayDate] = useState<string>('');
  const [playStartTimeHours, setPlayStartTimeHours] = useState<string>('');
  const [playStartTimeMinutes, setPlayStartTimeMinutes] = useState<string>('');
  const [playTimeMinutes, setPlayTimeMinutes] = useState<string>('');
  const [positions, setPositions] = useState<Position[]>([]);
  const [mainAddress, setMainAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [cost, setCost] = useState<string>('0');
  const [content, setContent] = useState<string>('');
  const [isGuestCountModalOpen, setIsGuestCountModalOpen] =
    useState<boolean>(false);
  const [isMatchDateModalOpen, setIsMatchDateModalOpen] =
    useState<boolean>(false);
  const [isStartTimeModalOpen, setIsStartTimeModalOpen] =
    useState<boolean>(false);
  const [isPlayTimeModalOpen, setIsPlayTimeModalOpen] =
    useState<boolean>(false);

  const onSubmit = () => {
    const gameData: PostGameRequest = {
      maxMemberCount: parseInt(maxMemberCount),
      playDate: playDate,
      playStartTime: `${playStartTimeHours}:${playStartTimeMinutes}`,
      playTimeMinutes: parseInt(playTimeMinutes),
      positions: positions,
      mainAddress: mainAddress,
      detailAddress: detailAddress,
      cost: parseInt(cost),
      content: content,
    };

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

  return {
    state: {
      maxMemberCount,
      playDate,
      playStartTimeHours,
      playStartTimeMinutes,
      playTimeMinutes,
      positions,
      mainAddress,
      detailAddress,
      cost,
      content,
      isGuestCountModalOpen,
      isMatchDateModalOpen,
      isStartTimeModalOpen,
      isPlayTimeModalOpen,
    },
    methods,
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
    onSubmit,
    handleAddressSelect,
    handleCost,
  };
};

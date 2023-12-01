import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useToggleButtons } from '@components/shared/ToggleButton';

import { useLocationsQuery } from '@hooks/data/useLocationsQuery';
import { useRegistrationMutation } from '@hooks/member/useRegistrationMutation';
import { usePositionToast } from '@hooks/usePositionToast';

import { Position, PositionInfo } from '@type/models/Position';

import { PATH_NAME } from '@constants/pathName';
import { POSITIONS_BUTTON } from '@constants/positions';

type Acronym = PositionInfo['acronym'];
export const useRegisterPage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const loginInfo = state;

  if (!loginInfo) {
    throw new Error('no login info available');
  }

  const [selectedLocation, setSelectedLocation] = useState<string[]>();
  const [selectedPosition, setSelectedPosition] = useState<Acronym[]>();

  const {
    handleToggle: handleToggleLocation,
    selectedItems: selectedLocations,
  } = useToggleButtons({
    onToggle: setSelectedLocation,
    isMultipleSelect: false,
  });

  const {
    handleToggle: handleTogglePosition,
    selectedItems: selectedPositions,
    selectedItem: selectedPositionItem,
  } = useToggleButtons({
    onToggle: setSelectedPosition,
    isMultipleSelect: true,
    noValue: POSITIONS_BUTTON['없음'],
  });

  const { getClickedPosition } = usePositionToast();

  const { mutate } = useRegistrationMutation();
  const { data: resLocations } = useLocationsQuery();
  const locations = resLocations.addressDepth2List;
  const submitRegistration = () => {
    const { email, nickname, profileImageUrl, oauthId, oauthProvider } =
      loginInfo;

    if (!selectedLocation) {
      window.alert('지역을 선택해주세요');
      return;
    }

    mutate({
      email,
      nickname,
      profileImageUrl,
      positions: selectedPosition as Position[],
      addressDepth1: '서울시',
      addressDepth2: selectedLocation[0],
      oauthId,
      oauthProvider,
    });

    navigate(PATH_NAME.MAIN);
  };

  const positionInfo =
    selectedPositionItem && getClickedPosition(selectedPositionItem);

  return {
    handleToggleLocation,
    selectedLocations,
    handleTogglePosition,
    selectedPositions,
    locations,
    positionInfo,
    submitRegistration,
  };
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { LogoImage } from '@pages/LoginPage/LoginPage.style';

import { Header } from '@components/Header';
import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';
import {
  ToggleButton,
  useToggleButtons,
} from '@components/shared/ToggleButton';

import { useRegistrationMutation } from '@hooks/mutations/useRegistrationMutation';
import { useLocationsQuery } from '@hooks/queries/useLocationsQuery';
import { usePositionToast } from '@hooks/usePositionToast';

import { theme } from '@styles/theme';

import { Position, PositionInfo } from '@type/models/Position';

import { PATH_NAME } from '@consts/pathName';
import { POSITIONS_BUTTON } from '@consts/positions';

import LOGO_SRC from '@assets/logoSvg.svg';

// 1번 라인
import {
  FieldContainer,
  Main,
  PositionButtonGroup,
  RegisterContainer,
  ScrollBox,
} from './RegisterPage.style';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const loginInfo = state;

  if (!loginInfo) {
    throw new Error('no login info available');
  }

  const [selectedLocation, setSelectedLocation] = useState<string[]>();
  const [selectedPosition, setSelectedPosition] = useState<string[]>();

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
  } = useToggleButtons({
    onToggle: setSelectedPosition,
    isMultipleSelect: true,
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
    selectedPosition &&
    getClickedPosition(
      selectedPosition[selectedPosition.length - 1] as PositionInfo['acronym']
    );

  return (
    <RegisterContainer>
      <Header isLogo={false} title="정보 입력" isRightContainer={false} />
      <Main>
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <FieldContainer>
          <Text size="1.2rem" weight={700}>
            주 활동 지역
          </Text>
          <ScrollBox>
            <SelectBox border="none">
              {locations.map((location) => (
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
        </FieldContainer>
        <FieldContainer>
          <Text size="1.2rem" weight={700}>
            주 포지션
          </Text>
          <PositionButtonGroup>
            {Object.entries(POSITIONS_BUTTON).map(([position, value]) => (
              <ToggleButton
                key={position}
                value={value}
                label={position}
                isActive={selectedPositions.includes(position)}
                onToggle={handleTogglePosition}
              />
            ))}
          </PositionButtonGroup>
          {positionInfo && (
            <Flex>
              <Text>{positionInfo.name}</Text>
              <Text weight={300}>
                {' : '}
                {positionInfo.description}
              </Text>
            </Flex>
          )}
        </FieldContainer>
        <FieldContainer>
          <Button
            width="100%"
            height="3.125rem"
            {...theme.BUTTON_PROPS.LARGE_RED_OUTLINED_BUTTON_PROPS}
            onClick={submitRegistration}
          >
            입력 완료
          </Button>
        </FieldContainer>
      </Main>
    </RegisterContainer>
  );
};

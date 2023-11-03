import { useState } from 'react';

import { LogoImage } from '@pages/LoginPage/LoginPage.style';

import { Header } from '@components/Header';
import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';
import {
  ToggleButton,
  useToggleButtons,
} from '@components/shared/ToggleButton';

import { theme } from '@styles/theme';

import { SEOUL } from '@consts/location';
import { POSITIONS } from '@consts/positions';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  FieldContainer,
  Main,
  PositionButtonGroup,
  RegisterContainer,
  ScrollBox,
} from './RegisterPage.style';

export const RegisterPage = () => {
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
        </FieldContainer>
        <FieldContainer>
          <Text size="1.2rem" weight={700}>
            주 포지션
          </Text>
          <PositionButtonGroup>
            {POSITIONS.map((position) => (
              <ToggleButton
                key={position}
                value={position}
                isActive={selectedPositions.includes(position)}
                onToggle={handleTogglePosition}
              />
            ))}
          </PositionButtonGroup>
        </FieldContainer>
        <FieldContainer>
          <Button
            width="100%"
            height="3.125rem"
            {...theme.BUTTON_PROPS.LARGE_RED_OUTLINED_BUTTON_PROPS}
            onClick={() => console.log(selectedLocation, selectedPosition)}
          >
            입력 완료
          </Button>
        </FieldContainer>
      </Main>
    </RegisterContainer>
  );
};

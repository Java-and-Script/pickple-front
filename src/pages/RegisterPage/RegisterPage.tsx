import { useState } from 'react';

import { Button } from '@components/shared/Button';
import { Header } from '@components/shared/Header';
import { Image } from '@components/shared/Image';
import { SelectBox } from '@components/shared/SelectBox';
import { Text } from '@components/shared/Text';
import {
  ToggleButton,
  useToggleButtons,
} from '@components/shared/ToggleButton';

import { theme } from '@styles/theme';

import { SEOUL } from '@consts/location';

import LOGO_SRC from '@assets/pickple_logo.png';

import {
  FieldContainer,
  RegisterContainer,
  ScrollBox,
  StyledButtonGroup,
} from './RegisterPage.style';

const positions = ['C', 'PF', 'SF', 'PG', 'SG', '없음'];

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
    <>
      <Header isLogo={false} title="정보 입력" isRightContainer={false} />
      <RegisterContainer>
        <Image src={LOGO_SRC} width="30%" height="auto" alt="pickle logo" />
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
          <StyledButtonGroup>
            {positions.map((position) => (
              <ToggleButton
                key={position}
                value={position}
                isActive={selectedPositions.includes(position)}
                onToggle={handleTogglePosition}
              />
            ))}
          </StyledButtonGroup>
        </FieldContainer>
        <FieldContainer>
          <Button
            text="입력 완료"
            width="100%"
            height="3.125rem"
            {...theme.BUTTON_PROPS.LARGE_RED_OUTLINED_BUTTON_PROPS}
            onClick={() => console.log(selectedLocation, selectedPosition)}
          />
        </FieldContainer>
      </RegisterContainer>
    </>
  );
};

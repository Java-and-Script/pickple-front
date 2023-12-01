import { LogoImage } from '@pages/LoginPage/LoginPage.style';

import { Header } from '@components/Header';
import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';
import { ToggleButton } from '@components/shared/ToggleButton';

import { theme } from '@styles/theme';

import { POSITIONS_BUTTON } from '@constants/positions';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  FieldContainer,
  Main,
  PositionButtonGroup,
  RegisterContainer,
  ScrollBox,
} from './RegisterPage.style';
import { useRegisterPage } from './hooks/useRegisterPage';

export const RegisterPage = () => {
  const {
    handleToggleLocation,
    selectedLocations,
    handleTogglePosition,
    selectedPositions,
    locations,
    positionInfo,
    submitRegistration,
  } = useRegisterPage();

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
            {Object.values(POSITIONS_BUTTON).map((position) => (
              <ToggleButton
                key={position}
                value={position}
                label={position}
                isActive={selectedPositions.includes(position)}
                onToggle={() => handleTogglePosition(position)}
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

import styled from '@emotion/styled';

import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

type MainPageNoContentItemProps = {
  name: string;
  onClick: VoidFunction;
};

const englishToKorean = (english: string): string | void => {
  if (english === 'GAME') return '게스트 매치';
  if (english === 'CREW') return '크루';
};

export const MainPageNoContentItem = ({
  name,
  onClick,
}: MainPageNoContentItemProps) => {
  return (
    <ItemWrapper gap={10} justify="space-between" onClick={onClick}>
      <ItemInfoBox>
        <Text size={20} ellipsis={1}>
          {'NO'}
        </Text>
        <Text size={14} ellipsis={1} color={theme.PALETTE.GRAY_400}>
          {name}
        </Text>
      </ItemInfoBox>
      <Description direction="column" gap={3}>
        <Text size={18} ellipsis={1}>
          {`근처에 ${englishToKorean(name)}가 없어요`}
        </Text>
        <Text size={12} ellipsis={1}>
          {'그렇다면 만들어볼까요?'}
        </Text>
        <Flex justify="space-between" align="center">
          <Button
            width={'100%'}
            height={'1.75rem'}
            fontWeight={theme.FONT_WEIGHT.BOLD}
            fontSize={14}
            textColor={theme.PALETTE.GRAY_300}
            backgroundColor="#ffffff"
          >
            {name === 'GAME' ? '게스트 모집하기' : '크루 만들기'}
          </Button>
        </Flex>
      </Description>
    </ItemWrapper>
  );
};

export const ItemWrapper = styled(Flex)`
  background-color: white;
  padding: 12px;
  border-radius: 8px;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.PALETTE.GRAY_100};
  min-width: 82px;
  border-radius: 8px;
`;

export const Description = styled(Flex)`
  flex-grow: 1;
`;

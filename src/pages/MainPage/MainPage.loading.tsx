import { Header } from '@components/Header';
import { SkeletonCardList } from '@components/SkeletonCardList';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { MainPageContainer, MainPageSubContainer } from './MainPage.style';

export const MainPageLoading = () => {
  return (
    <MainPageContainer>
      <Header isLogo={true} />
      <MainPageSubContainer>
        <Text children={'내 근처의 경기'} weight={700} size={'1.25rem'} />
        <SkeletonCardList count={3} gap={10} />
        <Button {...MAIN_PAGE_BUTTON_PROP} onClick={() => {}}>
          더보기
        </Button>
      </MainPageSubContainer>
      <MainPageSubContainer>
        <Text children={'추천 크루'} weight={700} size={'1.25rem'} />
        <SkeletonCardList count={3} gap={10} />
        <Button {...MAIN_PAGE_BUTTON_PROP} onClick={() => {}}>
          더보기
        </Button>
      </MainPageSubContainer>
    </MainPageContainer>
  );
};

const MAIN_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '3.5rem',
  text: '더보기',
  fontSize: `${theme.FONT_SIZE.LG}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};

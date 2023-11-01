import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@/consts/pathName';

import { Header } from '@components/shared/Header';
import { Text } from '@components/shared/Text';

import { CreatePageCard, CreatePageContainer } from './CreatePage.style';

export const CreatePage = () => {
  const navigate = useNavigate();

  const moveToCreateGame = () => {
    navigate(PATH_NAME.CREATE_GAME);
  };

  const moveToCreateCREW = () => {
    navigate(PATH_NAME.CREATE_CREW);
  };

  return (
    <>
      <Header title="글 작성" />
      <CreatePageContainer>
        <CreatePageCard onClick={() => moveToCreateGame()}>
          <Text size={'1.5rem'} weight={700}>
            게스트 모집하기
          </Text>
          <Text size={'1rem'} weight={300}>
            설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다.
            설명입니다. 설명입니다. 설명입니다. 설명입니다.
          </Text>
        </CreatePageCard>
        <CreatePageCard onClick={() => moveToCreateCREW()}>
          <Text size={'1.5rem'} weight={700}>
            크루 만들기
          </Text>
          <Text size={'1rem'} weight={300}>
            설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다.
            설명입니다. 설명입니다. 설명입니다. 설명입니다.
          </Text>
        </CreatePageCard>
      </CreatePageContainer>
    </>
  );
};

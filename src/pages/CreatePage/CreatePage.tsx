import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@/consts/pathName';

import { Header } from '@components/Header';

import { CreatePageContainer } from './CreatePage.style';
import { CreatePageCard } from './CreatePageCard';

export const CreatePage = () => {
  const navigate = useNavigate();

  const moveToCreateGame = () => {
    navigate(PATH_NAME.CREATE_GAME);
  };

  const moveToCreateCrew = () => {
    navigate(PATH_NAME.CREATE_CREW);
  };

  return (
    <>
      <Header title="글 작성" />
      <CreatePageContainer direction="column" gap={10}>
        <CreatePageCard
          onClick={moveToCreateGame}
          title="게스트 모집"
          description="설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다.
          설명입니다. 설명입니다. 설명입니다. 설명입니다."
        />
        <CreatePageCard
          onClick={moveToCreateCrew}
          title="크루 만들기"
          description="설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다.
          설명입니다. 설명입니다. 설명입니다. 설명입니다."
        />
      </CreatePageContainer>
    </>
  );
};

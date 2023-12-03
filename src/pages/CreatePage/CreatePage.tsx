import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';

import { PATH_NAME } from '@constants/pathName';

import { CreatePageContainer } from './CreatePage.style';
import { CreatePageCard } from './components/CreatePageCard';

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
      <Header title="글쓰기" />
      <CreatePageContainer direction="column" gap={10}>
        <CreatePageCard
          onClick={moveToCreateGame}
          title="게스트 모집하기"
          description={
            '같이 농구할 사람을 찾고 계신가요?\n지금 게스트 모집을 시작해서\n함께 농구할 사람을 찾아보세요!'
          }
        />
        <CreatePageCard
          onClick={moveToCreateCrew}
          title="크루 만들기"
          description={
            '꾸준히 함께 농구를 할 나와 딱 맞는 팀을 만들고 싶으신가요?\n지금 나만의 팀원을 모집해보세요!'
          }
        />
      </CreatePageContainer>
    </>
  );
};

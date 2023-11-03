import { useNavigate } from 'react-router-dom';

import { AllowCard } from '@components/AllowCard';
import { Header } from '@components/Header';

import { AllowCardGroup, Main, ManageContainer } from './ManagePage.style';

type ManagePageProps = { manageType: 'games' | 'crews' };

export const ManagePage = ({ manageType }: ManagePageProps) => {
  console.log(manageType);

  const navigate = useNavigate();
  const moveToProfile = (path: string) => {
    navigate(path);
  };

  return (
    <ManageContainer>
      <Header isLogo={false} title="10.21 송파구" isRightContainer={true} />
      <Main>
        <AllowCardGroup>
          <AllowCard
            player={{
              id: '234908390',
              nickname: '막내 백둥이',
              profileImageUrl:
                'https://i.ytimg.com/vi/scxNCuffq-0/maxresdefault.jpg',
            }}
            moveToProfile={moveToProfile}
          />
        </AllowCardGroup>
      </Main>
    </ManageContainer>
  );
};

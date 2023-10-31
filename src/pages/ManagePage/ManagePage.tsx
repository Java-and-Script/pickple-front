import { AllowCard, AllowCardGroup } from '@components/shared/AllowCard';
import { Header } from '@components/shared/Header';

import { Main, ManageWrapper } from './ManagePage.style';

type ManagePageProps = { manageType: 'games' | 'crews' };

export const ManagePage = ({ manageType }: ManagePageProps) => {
  console.log(manageType);

  return (
    <ManageWrapper>
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
          />
        </AllowCardGroup>
      </Main>
    </ManageWrapper>
  );
};

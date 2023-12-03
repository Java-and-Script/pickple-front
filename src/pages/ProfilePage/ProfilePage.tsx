import { Header } from '@components/Header';

import { ProfileContainer } from './ProfilePage.style';
import { Profile } from './components/Profile';
import { useProfilePage } from './hooks/useProfilePage';

export const ProfilePage = () => {
  const { memberId } = useProfilePage();
  return (
    <ProfileContainer>
      <Header isLogo={false} isRightContainer={true} />
      <Profile memberId={Number(memberId)} />
    </ProfileContainer>
  );
};

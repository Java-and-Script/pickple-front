import { useParams } from 'react-router-dom';

import { Header } from '@components/Header';

import { Profile } from './Profile';
import { ProfileContainer } from './ProfilePage.style';

export const ProfilePage = () => {
  const { id } = useParams();
  const memberId = Number(id);

  return (
    <ProfileContainer>
      <Header isLogo={false} isRightContainer={true} />
      <Profile memberId={memberId} />
    </ProfileContainer>
  );
};

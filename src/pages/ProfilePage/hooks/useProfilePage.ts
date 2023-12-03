import { useParams } from 'react-router-dom';

export const useProfilePage = () => {
  const { id: memberId } = useParams();

  if (memberId === undefined) {
    throw new Error('"member id" is undefined');
  }

  return { memberId };
};

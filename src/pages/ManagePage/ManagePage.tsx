type ManagePageProps = { manageType: 'games' | 'crews' };

export const ManagePage = ({ manageType }: ManagePageProps) => {
  return <>{manageType}</>;
};

import { AllowCardGroupContainer } from './AllowCard.style';

type AllowCardGroupProps = {
  children: React.ReactNode;
};
export const AllowCardGroup = ({ children }: AllowCardGroupProps) => {
  return <AllowCardGroupContainer>{children}</AllowCardGroupContainer>;
};

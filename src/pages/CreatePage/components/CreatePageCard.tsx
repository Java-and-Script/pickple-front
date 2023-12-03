import { Text } from '@components/shared/Text';

import { StyledCard } from '../CreatePage.style.ts';

type CreatePageCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};
export const CreatePageCard = ({
  title,
  description,
  onClick,
}: CreatePageCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <Text size={'1.5rem'} weight={700}>
        {title}
      </Text>
      <Text size={'1rem'} weight={300} style={{ whiteSpace: 'pre-wrap' }}>
        {description}
      </Text>
    </StyledCard>
  );
};

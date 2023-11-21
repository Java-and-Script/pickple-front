import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { StyledInfoItem } from './InfoItems.styles';

type InfoItemProps = {
  title: string;
  children: React.ReactNode;
  text: string;
};

export const InfoItem = ({ text, title, children }: InfoItemProps) => {
  return (
    <>
      <StyledInfoItem>
        <Text size={12} color={theme.PALETTE.GRAY_400} nowrap>
          {title}
        </Text>
        {children}
        <Text size="80%" lineHeight="1rem" nowrap>
          {text}
        </Text>
      </StyledInfoItem>
    </>
  );
};

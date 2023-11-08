import styled from '@emotion/styled';

type StyledParagraphProps = {
  size: string;
  weight: number;
  lineHeight: string;
  lineClamp: string;
};

export const StyledParagraph = styled.p<StyledParagraphProps>`
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  ${({ lineClamp }) => lineClamp};
`;

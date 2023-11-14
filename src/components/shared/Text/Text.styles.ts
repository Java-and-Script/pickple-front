import styled from '@emotion/styled';

type StyledSpanProps = {
  size: string;
  weight: number;
  lineHeight: string;
  lineClamp: string;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  ${({ lineClamp }) => lineClamp};
`;

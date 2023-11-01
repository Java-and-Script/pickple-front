import { CSSProperties } from 'react';

import styled from '@emotion/styled';

type FlexProps = {
  gap?: number;
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'first'};
  justify-content: ${({ justify }) => justify || 'first'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
`;

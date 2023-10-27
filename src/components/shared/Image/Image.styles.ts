import styled from '@emotion/styled';

import { ImageCustomProps } from './Image';

type ImgProps = Required<ImageCustomProps>;

export const Img = styled.img<ImgProps>`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ mode }) => mode};
`;

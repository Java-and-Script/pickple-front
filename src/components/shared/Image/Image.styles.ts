import styled from '@emotion/styled';

import { ImageCustomProps } from './Image';

type ImgProps = Required<ImageCustomProps> & { show: boolean };

export const Img = styled.img<ImgProps>`
  display: ${({ block, show }) => {
    if (!show) {
      return 'none';
    }
    return block ? 'block' : 'inline';
  }};
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  height: ${({ height }) => height};
  object-fit: ${({ mode }) => mode};
`;

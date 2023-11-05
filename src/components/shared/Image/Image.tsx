import { CSSProperties, HTMLAttributes, useState } from 'react';

import DefaultImg from '@assets/default.svg';

import { Img } from './Image.styles';

export type ImageCustomProps = {
  src: string;
  block?: boolean;
  width: number | string;
  height?: number | string;
  alt: string;
  mode?: CSSProperties['objectFit'];
};
type ImageProps = ImageCustomProps & HTMLAttributes<HTMLImageElement>;

export const Image = ({
  src,
  block = false,
  width,
  height = width,
  alt,
  mode = 'cover',
  ...props
}: ImageProps) => {
  const [showdefaultImage, setShowDefaultImage] = useState(true);
  const stringifiedWidth =
    typeof width === 'number' ? `${width / 16}rem` : width;
  const stringifiedHeight =
    typeof height === 'number' ? `${height / 16}rem` : height;

  return (
    <>
      <Img
        src={DefaultImg}
        alt={alt}
        width={stringifiedWidth}
        height={stringifiedHeight}
        block={block}
        mode={mode}
        show={showdefaultImage}
        {...props}
      />
      <Img
        src={src}
        alt={alt}
        width={stringifiedWidth}
        height={stringifiedHeight}
        block={block}
        mode={mode}
        show={!showdefaultImage}
        onLoad={() => setShowDefaultImage(false)}
        {...props}
      />
    </>
  );
};

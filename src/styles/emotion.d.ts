import '@emotion/react';

import { theme } from '@styles/theme';

type Palette = typeof theme.PALETTE;
type Styles = typeof theme.STYLES;
type FontSize = typeof theme.FONT_SIZE;
type FontWeight = typeof theme.FONT_WEIGHT;
type LineHeight = typeof theme.LINE_HEIGHT;
type Button = typeof theme.BUTTON_PROPS;

declare module '@emotion/react' {
  export interface Theme
    extends Palette,
      Styles,
      FontSize,
      FontWeight,
      LineHeight,
      Button {
    PALETTE: {
      [key in keyof Palette]: string;
    };
    STYLES: {
      [key in keyof Styles]: string;
    };
    FONT_SIZE: {
      [key in keyof FontSize]: string;
    };
    FONT_WEIGHT: {
      [key in keyof FontWeight]: string;
    };
    LINE_HEIGHT: {
      [key in keyof LineHeight]: string;
    };
    BUTTON_PROPS: {
      [key in keyof Button]: string;
    };
  }
}

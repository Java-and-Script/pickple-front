import { FONT_SIZE, FONT_WEIGHT } from './font';
import { PALETTE } from './palette';

const LARGE_RED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.LG,
  fontWeight: FONT_WEIGHT.BOLD,
  textColor: 'white',
  backgroundColor: PALETTE.RED_600,
} as const;

const SMALL_RED_OUTLINED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.XS,
  fontWeight: FONT_WEIGHT.MEDIUM,
  textColor: PALETTE.RED_400,
  borderColor: PALETTE.RED_400,
  borderRadius: '0.75rem',
  backgroundColor: 'white',
} as const;

const LARGE_RED_OUTLINED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.LG,
  fontWeight: FONT_WEIGHT.BOLD,
  borderColor: PALETTE.RED_400,
  borderRadius: '0.75rem',
  textColor: PALETTE.RED_400,
  backgroundColor: 'white',
} as const;

const LARGE_GRAY_OUTLINED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.LG,
  fontWeight: FONT_WEIGHT.BOLD,
  borderColor: PALETTE.GRAY_400,
  borderRadius: '0.75rem',
  textColor: PALETTE.GRAY_400,
  backgroundColor: 'white',
} as const;

const SMALL_GRAY_OUTLINED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.XS,
  fontWeight: FONT_WEIGHT.MEDIUM,
  borderColor: PALETTE.GRAY_400,
  borderRadius: '0.75rem',
  textColor: PALETTE.GRAY_400,
  backgroundColor: 'white',
};

export const BUTTON_PROPS = {
  LARGE_RED_BUTTON_PROPS,
  SMALL_RED_OUTLINED_BUTTON_PROPS,
  LARGE_RED_OUTLINED_BUTTON_PROPS,
  LARGE_GRAY_OUTLINED_BUTTON_PROPS,
  SMALL_GRAY_OUTLINED_BUTTON_PROPS,
} as const;

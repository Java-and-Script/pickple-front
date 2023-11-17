import { theme } from '@styles/theme';

export const getRankingItemBackgroundColor = (rank: number) => {
  switch (rank) {
    case 1:
      return 'gold';
    case 2:
      return theme.PALETTE.GRAY_300;
    case 3:
      return 'burlywood';
    default:
      return 'white';
  }
};

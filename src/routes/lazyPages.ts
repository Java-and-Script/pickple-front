import { lazy } from 'react';

export const ChatRoomListPage = lazy(async () => ({
  default: (await import('@pages/ChatRoomListPage')).ChatRoomListPage,
}));
export const ChattingPage = lazy(async () => ({
  default: (await import('@pages/ChattingPage')).ChattingPage,
}));
export const CreateCrewPage = lazy(async () => ({
  default: (await import('@pages/CreateCrewPage')).CreateCrewPage,
}));
export const CreateGamePage = lazy(async () => ({
  default: (await import('@pages/CreateGamePage')).CreateGamePage,
}));
export const CrewsChiefPage = lazy(async () => ({
  default: (await import('@pages/CrewsChiefPage')).CrewsChiefPage,
}));
export const CrewsDetailPage = lazy(async () => ({
  default: (await import('@pages/CrewsDetailPage')).CrewsDetailPage,
}));
export const CrewsManageParticipatePage = lazy(async () => ({
  default: (await import('@pages/CrewsManageParticipatePage'))
    .CrewsManageParticipatePage,
}));
export const CrewsParticipatePage = lazy(async () => ({
  default: (await import('@pages/CrewsParticipatePage')).CrewsParticipatePage,
}));
export const CrewsRankingPage = lazy(async () => ({
  default: (await import('@pages/CrewsRankingPage')).CrewsRankingPage,
}));
export const CrewsRecommendPage = lazy(async () => ({
  default: (await import('@pages/CrewsRecommendPage')).CrewsRecommendPage,
}));
export const GamesDetailPage = lazy(async () => ({
  default: (await import('@pages/GamesDetailPage')).GamesDetailPage,
}));
export const GamesHostPage = lazy(async () => ({
  default: (await import('@pages/GamesHostPage')).GamesHostPage,
}));
export const GamesNearPage = lazy(async () => ({
  default: (await import('@pages/GamesNearPage')).GamesNearPage,
}));
export const GamesParticipatePage = lazy(async () => ({
  default: (await import('@pages/GamesParticipatePage')).GamesParticipatePage,
}));
export const MainPage = lazy(async () => ({
  default: (await import('@pages/MainPage')).MainPage,
}));
export const MannerScoreReviewPage = lazy(async () => ({
  default: (await import('@pages/MannerScoreReviewPage')).MannerScoreReviewPage,
}));
export const MapPage = lazy(async () => ({
  default: (await import('@pages/MapPage')).MapPage,
}));
export const NotificationPage = lazy(async () => ({
  default: (await import('@pages/NotificationPage')).NotificationPage,
}));
export const GamesManageParticipatePage = lazy(async () => ({
  default: (await import('@pages/GamesManageParticipatePage'))
    .GamesManageParticipatePage,
}));
export const ProfilePage = lazy(async () => ({
  default: (await import('@pages/ProfilePage')).ProfilePage,
}));

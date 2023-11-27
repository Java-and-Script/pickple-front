import { lazy } from 'react';

import { EmotionJSX } from 'node_modules/@emotion/react/types/jsx-namespace';

type LazyPage = (
  name: string
) => React.LazyExoticComponent<() => EmotionJSX.Element>;

const lazyPage: LazyPage = (name) =>
  lazy(() =>
    import(`../pages/${name}`).then((exports) => ({
      default: exports[name],
    }))
  );

export const AllServicesPage = lazyPage('AllServicesPage');
export const AuthErrorPage = lazyPage('AuthErrorPage');
export const ChatRoomListPage = lazyPage('ChatRoomListPage');
export const ChattingPage = lazyPage('ChattingPage');
export const CreateCrewPage = lazyPage('CreateCrewPage');
export const CreateGamePage = lazyPage('CreateGamePage');
export const CreatePage = lazyPage('CreatePage');
export const CrewsChiefPage = lazyPage('CrewsChiefPage');
export const CrewsDetailPage = lazyPage('CrewsDetailPage');
export const CrewsManageParticipatePage = lazyPage(
  'CrewsManageParticipatePage'
);
export const CrewsRankingPage = lazyPage('CrewsRankingPage');
export const CrewsRecommendPage = lazyPage('CrewsRecommendPage');
export const ErrorPage = lazyPage('ErrorPage');

export const GamesDetailPage = lazyPage('GamesDetailPage');
export const GamesHostPage = lazyPage('GamesHostPage');
export const GamesManageParticipatePage = lazyPage(
  'GamesManageParticipatePage'
);
export const GamesNearPage = lazyPage('GamesNearPage');
export const GamesParticipatePage = lazyPage('GamesParticipatePage');
export const LoginPage = lazyPage('LoginPage');
export const MainPage = lazyPage('MainPage');
export const MannerScoreReviewPage = lazyPage('MannerScoreReviewPage');
export const MapPage = lazyPage('MapPage');
export const NotFoundPage = lazyPage('NotFoundPage');
export const NotificationPage = lazyPage('NotificationPage');
export const ProfilePage = lazyPage('ProfilePage');
export const RedirectPage = lazyPage('RedirectPage');
export const RegisterPage = lazyPage('RegisterPage');

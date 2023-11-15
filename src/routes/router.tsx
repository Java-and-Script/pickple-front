import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import { AllServicesPage } from '@pages/AllServicesPage';
import { CreateCrewPage } from '@pages/CreateCrewPage';
import { CreateGamePage } from '@pages/CreateGamePage';
import { CreatePage } from '@pages/CreatePage';
import { CrewsChiefPage } from '@pages/CrewsChiefPage';
import { CrewsDetailPage } from '@pages/CrewsDetailPage';
import { CrewsManageParticipatePage } from '@pages/CrewsManageParticipatePage';
import { CrewsParticipatePage } from '@pages/CrewsParticipatePage';
import { CrewsRecommendPage } from '@pages/CrewsRecommendPage';
import { ErrorPage } from '@pages/ErrorPage';
import { GamesDetailPage } from '@pages/GamesDetailPage';
import { GamesHostPage } from '@pages/GamesHostPage';
import { GamesManageParticipatePage } from '@pages/GamesManageParticipatePage';
import { GamesNearPage } from '@pages/GamesNearPage';
import { GamesParticipatePage } from '@pages/GamesParticipatePage';
import { Layout } from '@pages/Layout';
import { LoginPage } from '@pages/LoginPage';
import { MainPage } from '@pages/MainPage';
import { MannerScoreReviewPage } from '@pages/MannerScoreReviewPage';
import { MessageRoomPage } from '@pages/MessageRoomPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RedirectPage } from '@pages/RedirectPage';
import { RegisterPage } from '@pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'all-services', element: <AllServicesPage /> },
      { path: 'players/:id', element: <h1>players</h1> },
      {
        path: 'games/near',
        element: <GamesNearPage />,
      },
      {
        path: 'games/host',
        element: <GamesHostPage />,
      },
      {
        path: 'games/participate',
        element: <GamesParticipatePage />,
      },
      {
        path: 'games/:id',
        element: <GamesDetailPage />,
      },
      {
        path: 'games/:id/manage',
        element: <GamesManageParticipatePage />,
      },
      {
        path: 'games/:id/review',
        element: <MannerScoreReviewPage />,
      },
      {
        path: 'crews/recommend',
        element: <CrewsRecommendPage />,
      },
      {
        path: 'crews/chief',
        element: <CrewsChiefPage />,
      },
      {
        path: 'crews/participate',
        element: <CrewsParticipatePage />,
      },
      {
        path: 'crews/:id',
        element: <CrewsDetailPage />,
      },
      {
        path: 'crews/:id/manage',
        element: <CrewsManageParticipatePage />,
      },
      {
        path: 'create',
        element: <CreatePage />,
      },
      {
        path: 'create/game',
        element: <CreateGamePage />,
      },
      {
        path: 'create/crew',
        element: <CreateCrewPage />,
      },
      {
        path: 'profile/:id',
        element: <ProfilePage />,
      },
      { path: 'profile/update', element: <h1>프로필 수정 페이지</h1> },
      {
        path: 'map',
        element: <h3>map</h3>,
      },
      {
        path: 'message',
        element: <h3>message</h3>,
      },
      {
        path: 'message/:id',
        element: <MessageRoomPage />,
      },
      {
        path: 'auth/kakao/callback',
        element: <RedirectPage />,
      },
    ],
  },
]);

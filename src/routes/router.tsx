import { Suspense } from 'react';
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
        element: (
          <Suspense fallback={null}>
            <MainPage />
          </Suspense>
        ),
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'all-services', element: <AllServicesPage /> },
      { path: 'players/:id', element: <h1>players</h1> },
      {
        path: 'games/near',
        element: (
          <Suspense>
            <GamesNearPage />
          </Suspense>
        ),
      },
      {
        path: 'games/host',
        element: (
          <Suspense fallback={null}>
            <GamesHostPage />
          </Suspense>
        ),
      },
      {
        path: 'games/participate',
        element: (
          <Suspense fallback={null}>
            <GamesParticipatePage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id',
        element: (
          <Suspense fallback={null}>
            <GamesDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id/manage',
        element: (
          <Suspense fallback={null}>
            <GamesManageParticipatePage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id/review',
        element: (
          <Suspense fallback={null}>
            <MannerScoreReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/recommend',
        element: (
          <Suspense fallback={null}>
            <CrewsRecommendPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/chief',
        element: (
          <Suspense fallback={null}>
            <CrewsChiefPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/participate',
        element: <CrewsParticipatePage />,
      },
      {
        path: 'crews/:id',
        element: (
          <Suspense fallback={null}>
            <CrewsDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/:id/manage',
        element: (
          <Suspense fallback={null}>
            <CrewsManageParticipatePage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={null}>
            <ProfilePage />
          </Suspense>
        ),
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
        element: <h3>message room</h3>,
      },
      {
        path: 'auth/kakao/callback',
        element: <RedirectPage />,
      },
    ],
  },
]);

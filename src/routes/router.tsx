import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AllServicesPage } from '@pages/AllServicesPage';
import { CreateGamePage } from '@pages/CreateGamePage';
import { CreatePage } from '@pages/CreatePage';
import { GamesDetailPage } from '@pages/GamesDetailPage';
import { GamesHostPage } from '@pages/GamesHostPage';
import { GamesManagePage } from '@pages/GamesManagePage';
import { GamesNearPage } from '@pages/GamesNearPage';
import { GamesParticipatePage } from '@pages/GamesParticipatePage';
import { Layout } from '@pages/Layout';
import { LoginPage } from '@pages/LoginPage';
import { MainPage } from '@pages/MainPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RegisterPage } from '@pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
            <GamesManagePage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id/review',
        element: <h3>review</h3>,
      },
      {
        path: 'crews/recommend',
        element: <h3>crews/recommend</h3>,
      },
      {
        path: 'crews/chief',
        element: <h3>crews/chief</h3>,
      },
      {
        path: 'crews/participate',
        element: <h3>crews/participate</h3>,
      },
      {
        path: 'crews/:id',
        element: <h3>crews/:id</h3>,
      },
      {
        path: 'crews/:id/manage',
        element: <>crew/:id/manage</>,
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
        element: <h3>create/crew</h3>,
      },
      {
        path: 'profile/:id',
        element: (
          <Suspense fallback={null}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
]);

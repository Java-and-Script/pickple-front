import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { GamesDetailPage } from '@pages/GamesDetailPage';
import { GamesNearPage } from '@pages/GamesNearPage';
import { HomePage } from '@pages/HomePage';
import { Layout } from '@pages/Layout';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'all-services', element: <h1>all-services</h1> },
      { path: 'players/:id', element: <h1>players</h1> },
      {
        path: 'games/near',
        element: <GamesNearPage />,
      },
      {
        path: 'games/host',
        element: <h2>host</h2>,
      },
      {
        path: 'games/participate',
        element: <h2>participate</h2>,
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
        element: <h3>manage</h3>,
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
        element: <h3>crews/:id/manage</h3>,
      },
      {
        path: 'create',
        element: <h3>create</h3>,
      },
      {
        path: 'create/game',
        element: <h3>create/game</h3>,
      },
      {
        path: 'create/crew',
        element: <h3>create/crew</h3>,
      },
    ],
  },
]);

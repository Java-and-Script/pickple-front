import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { Layout } from '@pages/Layout';
import { ManagePage } from '@pages/ManagePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <h1>login</h1> },
      { path: 'register', element: <h1>register</h1> },
      { path: 'all-services', element: <h1>all-services</h1> },
      { path: 'players/:id', element: <h1>players</h1> },
      {
        path: 'games/near',
        element: <h2>near</h2>,
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
        element: <h2>id</h2>,
      },
      {
        path: 'games/:id/manage',
        element: <ManagePage manageType="games" />,
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
        element: <ManagePage manageType="crews" />,
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

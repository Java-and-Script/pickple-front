import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import { AllServicesPage } from '@pages/AllServicesPage';
import { AuthErrorPage } from '@pages/AuthErrorPage';
import { ChatRoomListPage } from '@pages/ChatRoomListPage';
import { ChattingPage } from '@pages/ChattingPage';
import { CreateCrewPage } from '@pages/CreateCrewPage';
import { CreateGamePage } from '@pages/CreateGamePage';
import { CreatePage } from '@pages/CreatePage';
import { CrewsChiefPage } from '@pages/CrewsChiefPage';
import {
  CrewsDetailPage,
  CrewsDetailPageLoading,
} from '@pages/CrewsDetailPage';
import { CrewsManageParticipatePage } from '@pages/CrewsManageParticipatePage';
import { CrewsParticipatePage } from '@pages/CrewsParticipatePage';
import { CrewsRankingPage } from '@pages/CrewsRankingPage';
import { CrewsRecommendPage } from '@pages/CrewsRecommendPage';
import { ErrorPage } from '@pages/ErrorPage';
import {
  GamesDetailPage,
  GamesDetailPageLoading,
} from '@pages/GamesDetailPage';
import { GamesHostPage } from '@pages/GamesHostPage';
import { GamesManageParticipatePage } from '@pages/GamesManageParticipatePage';
import { GamesNearPage } from '@pages/GamesNearPage';
import { GamesParticipatePage } from '@pages/GamesParticipatePage';
import { Layout } from '@pages/Layout';
import { LoginPage } from '@pages/LoginPage';
import { MainPage, MainPageLoading } from '@pages/MainPage';
import { MannerScoreReviewPage } from '@pages/MannerScoreReviewPage';
import { MapPage } from '@pages/MapPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { NotificationPage } from '@pages/NotificationPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RedirectPage } from '@pages/RedirectPage';
import { RegisterPage } from '@pages/RegisterPage';
import { CardListPageSkeleton } from '@pages/__components__/CardListPageSkeleton';
import { ManagePageSkeleton } from '@pages/__components__/ManagePageSkeleton';

import { ScrollTop } from './ScrollTop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <ErrorBoundary FallbackComponent={AuthErrorPage}>
          <ScrollTop />
          <Layout />
        </ErrorBoundary>
      </ErrorBoundary>
    ),
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<MainPageLoading />}>
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
          <Suspense
            fallback={<CardListPageSkeleton name="내 근처 게스트 매치" />}
          >
            <GamesNearPage />
          </Suspense>
        ),
      },
      {
        path: 'games/host',
        element: (
          <Suspense
            fallback={<CardListPageSkeleton name="내가 만든 게스트 매치" />}
          >
            <GamesHostPage />
          </Suspense>
        ),
      },
      {
        path: 'games/participate',
        element: (
          <Suspense
            fallback={<CardListPageSkeleton name="내가 참여한 게스트 매치" />}
          >
            <GamesParticipatePage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id',
        element: (
          <Suspense fallback={<GamesDetailPageLoading />}>
            <GamesDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id/manage',
        element: (
          <Suspense fallback={<ManagePageSkeleton />}>
            <GamesManageParticipatePage />
          </Suspense>
        ),
      },
      {
        path: 'games/:id/review',
        element: <MannerScoreReviewPage />,
      },
      {
        path: 'crews/recommend',
        element: (
          <Suspense fallback={<CardListPageSkeleton name="추천 크루" />}>
            <CrewsRecommendPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/chief',
        element: (
          <Suspense fallback={<CardListPageSkeleton name="내가 만든 크루" />}>
            <CrewsChiefPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/participate',
        element: (
          <Suspense fallback={<CardListPageSkeleton name="내가 속한 크루" />}>
            <CrewsParticipatePage />
          </Suspense>
        ),
      },
      {
        path: 'crews/ranking',
        element: <CrewsRankingPage />,
      },
      {
        path: 'crews/:id',
        element: (
          <Suspense fallback={<CrewsDetailPageLoading />}>
            <CrewsDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'crews/:id/manage',
        element: (
          <Suspense fallback={<ManagePageSkeleton />}>
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
        element: <ProfilePage />,
      },
      { path: 'profile/update', element: <h1>프로필 수정 페이지</h1> },
      {
        path: 'map',
        element: <MapPage />,
      },
      {
        path: 'chat',
        element: <ChatRoomListPage />,
      },
      {
        path: 'chat/:id',
        element: <ChattingPage />,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
      },
      {
        path: 'auth/kakao/callback',
        element: <RedirectPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

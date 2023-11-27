import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import { CrewsDetailPageLoading } from '@pages/CrewsDetailPage';
import { GamesDetailPageLoading } from '@pages/GamesDetailPage';
import { Layout } from '@pages/Layout';
import { MainPageLoading } from '@pages/MainPage';
import { SkeletonProfilePage } from '@pages/ProfilePage';
import { CardListPageSkeleton } from '@pages/__components__/CardListPageSkeleton';
import { ManagePageSkeleton } from '@pages/__components__/ManagePageSkeleton';

import { LoginRequireBoundary } from './LoginRequireBoundary';
import { ScrollTop } from './ScrollTop';
import {
  AllServicesPage,
  AuthErrorPage,
  ChatRoomListPage,
  ChattingPage,
  CreateCrewPage,
  CreateGamePage,
  CreatePage,
  CrewsChiefPage,
  CrewsDetailPage,
  CrewsManageParticipatePage,
  CrewsParticipatePage,
  CrewsRankingPage,
  CrewsRecommendPage,
  ErrorPage,
  GamesDetailPage,
  GamesHostPage,
  GamesManageParticipatePage,
  GamesNearPage,
  GamesParticipatePage,
  LoginPage,
  MainPage,
  MannerScoreReviewPage,
  MapPage,
  NotFoundPage,
  NotificationPage,
  ProfilePage,
  RedirectPage,
  RegisterPage,
} from './lazyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <ErrorBoundary FallbackComponent={AuthErrorPage}>
          <LoginRequireBoundary>
            <ScrollTop />
            <Layout />
          </LoginRequireBoundary>
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
        element: (
          <Suspense fallback={<SkeletonProfilePage />}>
            <ProfilePage />
          </Suspense>
        ),
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

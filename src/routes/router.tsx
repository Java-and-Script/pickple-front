import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter } from 'react-router-dom';

import { AllServicesPage } from '@pages/AllServicesPage';
import { AuthErrorPage } from '@pages/AuthErrorPage';
import { ChatRoomListPage } from '@pages/ChatRoomListPage';
import { ChattingPageSkeleton } from '@pages/ChattingPage';
import { CreateCrewPageSkeleton } from '@pages/CreateCrewPage';
import { CreateGamePageSkeleton } from '@pages/CreateGamePage';
import { CreatePage } from '@pages/CreatePage';
import { CrewsDetailPageLoading } from '@pages/CrewsDetailPage';
import { ErrorPage } from '@pages/ErrorPage';
import { GamesDetailPageLoading } from '@pages/GamesDetailPage';
import { Layout } from '@pages/Layout';
import { LoginPage } from '@pages/LoginPage';
import { MainPageLoading } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePageSkeleton } from '@pages/ProfilePage';
import { RedirectPage } from '@pages/RedirectPage';
import { RegisterPage } from '@pages/RegisterPage';
import { CardListPageSkeleton } from '@pages/__components__/CardListPageSkeleton';
import { ItemListPageSkeleton } from '@pages/__components__/ItemListPageSkeleton';
import { ManagePageSkeleton } from '@pages/__components__/ManagePageSkeleton';

import { LoginRequireBoundary } from './LoginRequireBoundary';
import { ScrollTop } from './ScrollTop';
import {
  ChattingPage,
  CreateCrewPage,
  CreateGamePage,
  CrewsChiefPage,
  CrewsDetailPage,
  CrewsManageParticipatePage,
  CrewsParticipatePage,
  CrewsRankingPage,
  CrewsRecommendPage,
  GamesDetailPage,
  GamesHostPage,
  GamesManageParticipatePage,
  GamesNearPage,
  GamesParticipatePage,
  MainPage,
  MannerScoreReviewPage,
  MapPage,
  NotificationPage,
  ProfilePage,
} from './lazyPages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <ErrorBoundary FallbackComponent={AuthErrorPage}>
          <LoginRequireBoundary>
            <ScrollTop />
            <Layout />
            <Toaster />
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
      /** TODO 스켈레톤 만들어야 함 */
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
        element: (
          <Suspense fallback={<ItemListPageSkeleton name="크루 랭킹" />}>
            <CrewsRankingPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<CreateGamePageSkeleton />}>
            <CreateGamePage />
          </Suspense>
        ),
      },
      {
        path: 'create/crew',
        element: (
          <Suspense fallback={<CreateCrewPageSkeleton />}>
            <CreateCrewPage />
          </Suspense>
        ),
      },
      {
        path: 'profile/:id',
        element: (
          <Suspense fallback={<ProfilePageSkeleton />}>
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
        element: (
          <Suspense fallback={<ChattingPageSkeleton />}>
            <ChattingPage />
          </Suspense>
        ),
      },
      {
        path: 'notification',
        element: (
          <Suspense fallback={<ItemListPageSkeleton name="알림" />}>
            <NotificationPage />
          </Suspense>
        ),
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

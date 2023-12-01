import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { Navbar } from '@components/Navbar/Navbar';

import { PATH_NAME } from '@constants/pathName';

import { FallbackPage } from './FallbackPage';

export const Layout = () => {
  const { pathname } = useLocation();
  const showNav = !pathname.includes(PATH_NAME.CHAT + '/');

  return (
    <>
      <LayoutWrapper>
        <Suspense fallback={<FallbackPage />}>
          <Outlet />
        </Suspense>
      </LayoutWrapper>
      {showNav && <Navbar />}
    </>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100%;
`;

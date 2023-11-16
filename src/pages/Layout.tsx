import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { Navbar } from '@components/Navbar/Navbar';

import { PATH_NAME } from '@consts/pathName';

import { FallbackPage } from './FallbackPage';

export const Layout = () => {
  const { pathname } = useLocation();
  const showNav = !pathname.includes(PATH_NAME.MESSAGE + '/');

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

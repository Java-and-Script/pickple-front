import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import { Navbar } from '@components/Navbar/Navbar';

import { FallbackPage } from './FallbackPage';

export const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Suspense fallback={<FallbackPage />}>
          <Outlet />
        </Suspense>
      </LayoutWrapper>
      <Navbar />
    </>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100%;
`;

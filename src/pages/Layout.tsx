import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import { Navbar } from '@components/Navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      <Navbar />
    </>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100%;
`;

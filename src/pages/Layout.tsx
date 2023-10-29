import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import { Navbar } from '@components/shared/Navbar/Navbar';

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
  margin: 50px 16px 0 16px;
`;

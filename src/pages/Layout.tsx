import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

export const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      <Nav>하단 NAV바</Nav>
    </>
  );
};

const LayoutWrapper = styled.div`
  margin: 0 16px;
`;

const Nav = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: aqua;
`;

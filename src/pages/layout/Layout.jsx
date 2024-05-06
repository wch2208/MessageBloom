import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import HeaderPost from '../../components/headerPost/HeaderPost';

const Layout = () => {
  const location = useLocation();
  const isPostIdPage =
    location.pathname.includes('/post/') && !location.pathname.includes('/message');

  return (
    <>
      <Header />
      {isPostIdPage && <HeaderPost />}
      <Outlet />
    </>
  );
};

export default Layout;

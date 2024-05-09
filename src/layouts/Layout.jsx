import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import MouseTracker from '../components/commons/mouse-tracker';

const Layout = () => {
  return (
    <>
      <MouseTracker />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

import Image from 'next/future/image';
import React from 'react';
import Carousel from './Carousel';

const Layout = ({ children }) => {
  return <div className="max-w-lg mx-auto relative pb-28 bg-purple-50">{children}</div>;
};

export default Layout;

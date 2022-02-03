import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const LayoutRoot = ({ children }: Props) => (
  <main
    className="bg-gray-100 flex flex-col min-h-screen w-full dark:bg-dark"
    data-theme="cupcake">
    <Header />
    {children}
    <Footer />
  </main>
);

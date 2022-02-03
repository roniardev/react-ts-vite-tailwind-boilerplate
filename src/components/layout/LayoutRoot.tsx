import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const LayoutRoot = ({ children }: Props) => (
  <main
    className="flex min-h-screen w-full flex-col bg-gray-100 dark:bg-dark"
    data-theme="cupcake"
  >
    <Header />
    {children}
    <Footer />
  </main>
);

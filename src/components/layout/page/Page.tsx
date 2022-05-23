import React from 'react';

export const Page: React.FC = ({ children }) => {
  return <section className="flex flex-1 flex-col py-16">{children}</section>;
};

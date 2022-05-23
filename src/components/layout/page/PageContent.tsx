import React from 'react';

import { Container } from './Container';

export const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col px-4 pb-12">
      <Container>{children}</Container>
    </div>
  );
};

import React from 'react';

import { Container } from './Container';

export const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 px-4 pb-12">
      <Container>{children}</Container>
    </div>
  );
};

import React from 'react';

import { Container } from './Container';

type PageContentAttribute = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentAttribute> = (props: PageContentAttribute) => {
  return (
    <div className="flex flex-1 flex-col px-4 pb-12">
      <Container>{props.children}</Container>
    </div>
  );
};

export default PageContent;

import React from 'react';

import { Container } from './Container';

type PageContentAttribute = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentAttribute> = (props: PageContentAttribute) => {
  return (
    <div className="flex flex-col flex-1 px-4 pb-12">
      <Container>{props.children}</Container>
    </div>
  );
};

export default PageContent;

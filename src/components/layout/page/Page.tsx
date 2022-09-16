import React from 'react';

type PageChildren = {
  children: React.ReactNode;
};

const Page: React.FC<PageChildren> = (props: PageChildren) => {
  return <section className="flex flex-1 flex-col py-16">{props.children}</section>;
};

export default Page;

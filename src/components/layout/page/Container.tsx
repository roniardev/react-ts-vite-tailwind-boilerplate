import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return <div className="mx-auto w-full sm:max-w-3xl">{props.children}</div>;
};

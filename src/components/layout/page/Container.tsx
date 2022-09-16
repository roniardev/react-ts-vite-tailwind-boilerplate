import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return <div className="w-full mx-auto sm:max-w-3xl">{props.children}</div>;
};

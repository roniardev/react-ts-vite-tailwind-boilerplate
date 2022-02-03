import React from 'react';

export const Container = <T extends {}>(props: React.PropsWithChildren<T>) => {
  return <div className="mx-auto w-full sm:max-w-3xl">{props.children}</div>;
};

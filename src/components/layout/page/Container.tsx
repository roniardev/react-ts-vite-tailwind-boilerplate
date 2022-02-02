import React from 'react';

export const Container = <T extends {}>(props: React.PropsWithChildren<T>) => {
  return <div className="w-full sm:max-w-3xl mx-auto">{props.children}</div>;
};

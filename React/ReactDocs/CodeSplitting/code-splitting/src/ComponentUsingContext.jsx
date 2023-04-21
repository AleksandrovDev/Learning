import React from 'react';
import { myContext } from './App';

export const ComponentUsingContext = () => {
  // const myContextValue = React.useContext(myContext);
  return <myContext.Consumer>{(value) => <div>{value}</div>}</myContext.Consumer>;
};

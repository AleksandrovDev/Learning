import './App.css';
import React, { startTransition, Suspense } from 'react';
import { MyErrorBoundary } from './MyErrorBoundary';
import { ComponentWithErrorInRender } from './ComponentWithErrorInRender';
import { ComponentUsingContext } from './ComponentUsingContext';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

export const myContext = React.createContext('first');

function App() {
  const [isFirst, setIsFirst] = React.useState(true);
  const [showErrorComponent, setShowErrorComponent] = React.useState(false);

  const handleClick = () => {
    startTransition(() => setIsFirst(!isFirst));
  };

  const fallback = (props) => {
    
    return (
      <>
        <h1>Something went wrong!</h1>
        <button onClick={() => props.resetError()}>Cancel error</button>
      </>
    );
  };

  return (
    <MyErrorBoundary fallback={fallback} resetError={() => setShowErrorComponent(false)}>
      <div>
        <h1>Error Boundary, Suspense and startTransition</h1>
        <Suspense fallback={<div>LOADING...</div>}>{isFirst ? <OtherComponent /> : <AnotherComponent />}</Suspense>
        <button onClick={() => handleClick()}>Change component</button>
        {showErrorComponent ? <ComponentWithErrorInRender /> : null}
        <button onClick={() => setShowErrorComponent(true)}>Show component with error in render</button>
        <h1>Context</h1>
        <myContext.Provider value={'second'}>
          <ComponentUsingContext />
        </myContext.Provider>
      </div>
    </MyErrorBoundary>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useError404 } from './stores/useError404';

const NotFound = lazy(() =>
  import('./components/NotFound404').then((module) => ({
    default: module.NotFound,
  }))
);

const RootRouter = () => {
  const setErrorPage = useError404((state) => state.setErrorPage);

  const validRoutes = ['/'];
  const currentPath = window.location.pathname;
  const isErrorPage = !validRoutes.includes(currentPath);
  setErrorPage(isErrorPage);

  return isErrorPage ? (
    <Suspense fallback={null}>
      <NotFound />
    </Suspense>
  ) : (
    <App />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <RootRouter />
  </React.Fragment>
);

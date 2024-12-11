import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NotFound } from './components/NotFound404';
import { useError404 } from './stores/useError404';

const RootRouter = () => {
  const setErrorPage = useError404((state) => state.setErrorPage);

  const validRoutes = ['/'];
  const currentPath = window.location.pathname;
  const isErrorPage = !validRoutes.includes(currentPath);
  setErrorPage(isErrorPage);

  return isErrorPage ? <NotFound /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <RootRouter />
  </React.Fragment>
);

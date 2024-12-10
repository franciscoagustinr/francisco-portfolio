import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NotFound } from './components/NotFound404';
import { useError404 } from './stores/useError404';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const validRoutes = ['/'];
// const currentPath = window.location.pathname;

// const isErrorPage = useError404((state) => state.isErrorPage);

// if (validRoutes.includes(currentPath)) {
//   root.render(
//     <React.Fragment>
//       <App />
//     </React.Fragment>
//   );
// } else {
//   root.render(<NotFound />);
// }
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
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);

import React from 'react';
import 'config/ReactotronConfig';
// import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import { Provider as ReduxProvider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './store';

// import Routes from './routes';

const App: React.FC = () => (
  // <Router>
  //   <AppProvider>
  //     <Routes />
  //   </AppProvider>
  //   <GlobalStyle />
  // </Router>
  <>
    <ReduxProvider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </ReduxProvider>
  </>
);

export default App;

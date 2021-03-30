import React from 'react';
import 'config/ReactotronConfig';
// import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from './store';

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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </ReduxProvider>
  </>
);

export default App;

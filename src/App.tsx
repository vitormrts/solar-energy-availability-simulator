import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@src/themes/defaultTheme';
import GlobalStyle from '@src/themes/GlobalStyle';
import { Simulator } from '@src/pages';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Simulator />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      style={{ maxWidth: '500px', width: '100%' }}
    />
  </ThemeProvider>
);

export default App;

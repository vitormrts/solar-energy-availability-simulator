import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@src/themes/defaultTheme';
import GlobalStyle from '@src/themes/GlobalStyle';
import { Simulator } from '@src/pages';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Simulator />
  </ThemeProvider>
);

export default App;

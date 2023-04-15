import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #fafafa;
  }
  
  
  html, body {
    font-family: Galano, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }
`;

export default GlobalStyle;

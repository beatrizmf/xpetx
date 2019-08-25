import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #259bd9;
    font-family: "Source Sans Pro";
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

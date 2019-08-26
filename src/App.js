import React from 'react';
import dontenv from 'dotenv';
import GlobalStyle, { Container } from './styles';
import Routes from './routes';

dontenv.config();

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

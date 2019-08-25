import React from 'react';
import GlobalStyle, { Container } from './styles';
import Routes from './routes';
import 'dotenv';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

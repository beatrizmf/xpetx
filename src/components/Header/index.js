import React from 'react';
import Container from './styles';
import logo from '../../assets/logo.png';

export default function App() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h1>Encontre o par perfeito para o seu pet!</h1>
    </Container>
  );
}

import React from 'react';
import Container from './styles';
import mascot from '../../assets/mascot.png';
import balloon from '../../assets/balloon.svg';

export default function Mascot() {
  return (
    <Container>
      <img src={mascot} alt="Mascote" />
      <div>
        <img src={balloon} id="balloon" alt="Mascote" />
        <p>Oi, eu sou o Tinoco!</p>
      </div>
    </Container>
  );
}

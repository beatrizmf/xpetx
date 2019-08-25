import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Container from './styles';

export default function CardStory() {
  return (
    <Container>
      <p>
        <FaQuoteLeft /> Estive um tempo triste, às vezes até nervoso, mas sou um
        cachorrinho muito legal!
      </p>
      <br />
      <p>
        Tenho períodos de reprodução que eu não controlo, e para piorar meu dono
        sempre tinha dificuldade em encontrar uma namoradinha pra mim, foi aí
        ele conheceu o XPetX e me ajudou bastante.
      </p>
      <br />
      <p>
        Por isso eu vim aqui anunciar para meus amigos cachorros essa solução,
        que é o mais novo site de busca amorosa para cães, se você tem esse
        problema você poderá cadastrar seu email e ficar por dentro das
        novidades e conhecer melhor essa ideia incrível! <FaQuoteRight />
      </p>
    </Container>
  );
}

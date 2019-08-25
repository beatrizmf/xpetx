import React from 'react';
import { MdCopyright } from 'react-icons/md';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <MdCopyright /> {new Date().getFullYear()} XpetX
    </Container>
  );
}

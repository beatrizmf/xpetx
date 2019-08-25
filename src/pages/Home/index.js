import React from 'react';
import Header from '../../components/Header';
import Mascot from '../../components/Mascot';
import CardStory from '../../components/CardStory';
import FormSubscription from '../../components/FormSubscription';
import Footer from '../../components/Footer';
import Container from './styles';

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Mascot />
        <CardStory />
      </Container>
      <FormSubscription />
      <Footer />
    </>
  );
}

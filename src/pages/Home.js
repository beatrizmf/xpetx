import React from 'react';
import Header from '../components/Header';
import Mascot from '../components/Mascot';
import FormSubscription from '../components/FormSubscription';
import Footer from '../components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <div>
        <Mascot />
      </div>
      <FormSubscription />
      <Footer />
    </>
  );
}

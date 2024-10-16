import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceTracker from '../components/Pricetracker';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to GoNow!</h1>
        <PriceTracker location="New York" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

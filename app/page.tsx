"use client";
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import PriceTracker from './components/Pricetracker';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: grey;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Home: React.FC = () => {
  return ( 
    <Container>
      <Header />
      <Main>
        <Title>GoNow!</Title>
        <PriceTracker location="NewYork" />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;

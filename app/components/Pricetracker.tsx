"use client";
import React from 'react';
import styled from 'styled-components';
import usePriceTracking from '../hooks/usePriceTracking';

type PriceTrackerProps = {
  location: string;
};

// Styled components
const PriceTrackerWrapper = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
`;

const PriceText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #2e8b57;
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: #555;
`;

const PriceTracker: React.FC<PriceTrackerProps> = ({ location }) => {
  const { price, loading } = usePriceTracking(location);

  if (loading) {
    return (
      <PriceTrackerWrapper>
        <LoadingText>Loading price data...</LoadingText>
      </PriceTrackerWrapper>
    );
  }

  return (
    <PriceTrackerWrapper>
      <PriceText>Current price for {location}: ${price}</PriceText>
    </PriceTrackerWrapper>
  );
};

export default PriceTracker;

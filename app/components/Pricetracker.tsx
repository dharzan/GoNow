"use client"
import React from 'react';
import usePriceTracking from '../hooks/usePriceTracking';

type PriceTrackerProps = {
  location: string;
};

const PriceTracker: React.FC<PriceTrackerProps> = ({ location }) => {
  const { price, loading } = usePriceTracking(location);

  if (loading) {
    return <p>Loading price data...</p>;
  }

  return (
    <div className="price-tracker">
      <p>Current price for {location}: ${price}</p>
    </div>
  );
};

export default PriceTracker;

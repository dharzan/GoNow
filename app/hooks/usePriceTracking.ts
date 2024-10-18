"use client"
import { useState, useEffect } from 'react';

type UsePriceTrackingReturn = {
  price: number;
  loading: boolean;
};

const usePriceTracking = (location: string): UsePriceTrackingReturn => {
  const [price, setPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrice = async () => {
      setLoading(true);
      try {
        console.log(location);
        const response = await fetch(`/api/prices/${location}`);
        const data = await response.json();
        setPrice(data.price);
      } catch (error) {
        console.error('Error fetching price data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, [location]);

  return { price, loading };
};

export default usePriceTracking;

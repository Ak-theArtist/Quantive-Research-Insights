// src/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);
};

export default usePageTracking;

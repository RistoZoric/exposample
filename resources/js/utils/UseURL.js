import { useState, useEffect } from 'react';
import route from 'ziggy';
import cacheRoutes from '@/utils/cacheRoutes';

export default function useURL() {
  const [routes, setRoutes] = useState(null);

  useEffect(async () => {
    const cachedRoutes = await cacheRoutes();
    setRoutes(cachedRoutes);
  }, []);

  return (name, params = undefined, absolute = undefined) => {
    if (routes) {
        return URL(name,params);
       
    }
    return 'http://localhost';
  };
}

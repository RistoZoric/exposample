import { useState, useEffect } from 'react';
import route from 'ziggy';
import cacheRoutes from '@/utils/cacheRoutes';

export default function useRoutes() {
  const [routes, setRoutes] = useState(null);

  useEffect(async () => {
    const cachedRoutes = await cacheRoutes();
    setRoutes(cachedRoutes);
  }, []);

  return (name, params = undefined, absolute = undefined) => {
    if (routes) {
      return route(name, params, absolute, routes);
    }
    return 'http://localhost';
  };
}

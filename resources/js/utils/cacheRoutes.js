import { getWithExpiry, setWithExpiry } from '@/utils/storageWithExpiry';

const cacheRoutes = async () => {
  let routes = getWithExpiry('routes');
  if (!routes) {
    const response = await fetch('/api/routes');
    routes = await response.json();
    // Store for 5 minutes (milliseconds).
    setWithExpiry('routes', routes, 5 * 60000);
  }
  return routes;
};

export default cacheRoutes;

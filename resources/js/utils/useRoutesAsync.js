import route from 'ziggy';
import cacheRoutes from '@/utils/cacheRoutes';

export default function useRoutes() {
  return async (name, params = undefined, absolute = undefined) => {
    const cachedRoutes = await cacheRoutes();
    return route(name, params, absolute, cachedRoutes);
  };
}

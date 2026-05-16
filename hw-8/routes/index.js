import sellersRouter from './sellers.js';
import storesRouter from './stores.js';
import salesRouter from './sales.js';
import homeRouter from './home.js';

import { ROUTES } from '../common/index.js';

export const routes = [
  { path: ROUTES.HOME, router: homeRouter },
  { path: ROUTES.SELLERS, router: sellersRouter },
  { path: ROUTES.STORES, router: storesRouter },
  { path: ROUTES.SALES, router: salesRouter },
];

import homeRouter from './home.js';
import cartRouter from './cart.js';

import { ROUTES } from '../common/index.js';

export const routes = [
  { path: ROUTES.HOME, router: homeRouter },
  { path: ROUTES.CART, router: cartRouter },
];

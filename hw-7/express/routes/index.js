import homeRouter from './home.js';
import productRouter from './product.js';
import clearRouter from './clear.js';

import { ROUTES } from '../common/index.js';

export const routes = [
  { path: ROUTES.HOME, router: homeRouter },
  { path: ROUTES.PRODUCT, router: productRouter },
  { path: ROUTES.CLEAR, router: clearRouter },
];

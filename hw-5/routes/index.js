import homeRouter from './home.js';
import uploadRouter from './upload.js';
import listRouter from './list.js';

import { ROUTES } from '../common/index.js';

export const routes = [
  { path: ROUTES.HOME, router: homeRouter },
  { path: ROUTES.UPLOAD, router: uploadRouter },
  { path: ROUTES.LIST, router: listRouter },
];

import homeRouter from './home.js';
import cityRouter from "./city.js"

import { ROUTES } from '../common/index.js';

export const routes = [
    { path: ROUTES.HOME, router: homeRouter },
    { path: ROUTES.CITY, router: cityRouter }
];

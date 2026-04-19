import homeRouter from './home.js';
import randomNumberRouter from './randomNumber.js';
import timeRouter from './time.js';
import timestampRouter from './timestamp.js';
import passwordRouter from './password.js';
import testRouter from './test.js';
import testPostRouter from './test-post.js';
import cardRouter from './card.js';
import urlRouter from './url.js';

import { ROUTES } from '../common/index.js';

export const routes = [
  { path: ROUTES.HOME, router: homeRouter },
  { path: ROUTES.RANDOM_NUMBER, router: randomNumberRouter },
  { path: ROUTES.TIME, router: timeRouter },
  { path: ROUTES.TIMESTAMP, router: timestampRouter },
  { path: ROUTES.PASSWORD, router: passwordRouter },
  { path: ROUTES.TEST, router: testRouter },
  { path: ROUTES.TEST_POST, router: testPostRouter },
  { path: ROUTES.CARD, router: cardRouter },
  { path: ROUTES.URL, router: urlRouter },
];

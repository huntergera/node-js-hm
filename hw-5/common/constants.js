export const ROUTES = {
  HOME: '/',
  UPLOAD: '/upload',
  LIST: '/upload/list',
};

export const STATUS_CODES = {
  NOT_FOUND: 404,
  ERROR: 'error',
};

export const MESSAGES = {
  NOT_FOUND: 'Page 404 not found',
  SERVER_ERROR: 'Internal Server Error',
  FILE_NOT_SELECTED: 'File not selected.',
  FILE_SIZE_PROBLEM: 'File size problem.',
  FILE_EXTENSION: 'Invalid extension.',
};

export const FILE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif'];
export const MAX_SIZE = 250 * 1024;

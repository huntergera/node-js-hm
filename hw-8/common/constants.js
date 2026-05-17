export const ROUTES = {
  SELLERS: '/api/v1/sellers',
  STORES: '/api/v1/stores',
  SALES: '/api/v1/sales',
};

export const STATUS_CODES = {
  NOT_FOUND: 404,
  ERROR: 'error',
};

export const MESSAGES = {
  NOT_FOUND: '404 not found',
  SELLER_NOT_FOUND: 'Seller not found',
  STORE_NOT_FOUND: 'Store not found',
  SERVER_ERROR: 'Internal Server Error',
  ID_ERROR: 'Invalid ID format',
  DUBLICATE_ERROR: 'Duplicate value for unique field',
  STORE_FORMAT_ERROR: 'Invalid storeId format',
  SELLER_FORMAT_ERROR: 'Invalid sellerId format',
  DATE_FORMAT_ERROR: 'Invalid dateFrom format',
  EMPTY_BODY_ERROR: 'Request body cannot be empty',
};

export const STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
};

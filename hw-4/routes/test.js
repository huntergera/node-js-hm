import express from 'express';
const router = express.Router();
import { faker } from '@faker-js/faker';

const FIELD_POOL = [
  ['id', () => faker.string.uuid()],
  ['name', () => faker.person.fullName()],
  ['email', () => faker.internet.email()],
  ['phone', () => faker.phone.number()],
  ['avatar', () => faker.image.avatar()],
  ['username', () => faker.internet.username()],
  ['birthdate', () => faker.date.birthdate().toISOString().slice(0, 10)],
  ['gender', () => faker.person.sex()],
  ['street', () => faker.location.streetAddress()],
  ['city', () => faker.location.city()],
  ['country', () => faker.location.country()],
  ['zip', () => faker.location.zipCode()],
  ['latitude', () => faker.location.latitude()],
  ['longitude', () => faker.location.longitude()],
  ['company', () => faker.company.name()],
  ['jobTitle', () => faker.person.jobTitle()],
  ['department', () => faker.commerce.department()],
  ['catchPhrase', () => faker.company.catchPhrase()],
  ['product', () => faker.commerce.productName()],
  ['price', () => faker.commerce.price({ symbol: '$' })],
];

const generatePayload = () => {
  const count = faker.number.int({ min: 3, max: 20 });
  const picked = faker.helpers.arrayElements(FIELD_POOL, count);
  return Object.fromEntries(picked.map(([key, fn]) => [key, fn()]));
};

router
  .route('/')
  .get((req, res) => {
    res.json(generatePayload());
  })
  .post((req, res) => {
    res.json(generatePayload());
  });

export default router;

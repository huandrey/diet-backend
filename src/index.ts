/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import 'reflect-metadata';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);
app.get('/', (request, response) => response.json({
  message: 'Meu server Express, Typescript e ESLint!',
}));

app.listen(3333, () => {
  console.log('Back-end started in 3333 port!');
});

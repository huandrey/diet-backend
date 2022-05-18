/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { Router } from 'express';
// import { CreateFood } from './controllers/CreateFood';
import { createFoodController } from './useCases/CreateFood';

const router = Router();

// const createFood = new CreateFood();

router.post('/food', (request, response) => createFoodController.handle(request, response));

export { router };

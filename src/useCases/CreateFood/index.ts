/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { PrismaFoodRepository } from '../../repositories/implementations/PrismaFoodRepository';
import { CreateFoodController } from './CreateFoodController';
import { CreateFoodUseCase } from './CreateFoodUseCase';

const prismaFoodRepository = new PrismaFoodRepository();

const createFoodUseCase = new CreateFoodUseCase(prismaFoodRepository);

const createFoodController = new CreateFoodController(createFoodUseCase);

export { createFoodUseCase, createFoodController };

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
import { Request, Response } from 'express';
import { CreateFoodUseCase } from './CreateFoodUseCase';

export class CreateFoodController {
  constructor(private createFoodUseCase: CreateFoodUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      name, amount, protein, carbohydrate, calories, fat,
    } = request.body;

    try {
      await this.createFoodUseCase.execute({
        name, amount, protein, carbohydrate, calories, fat,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-empty-function */
import { Food } from '../../entities/Food';
import { IFoodRepository } from '../../repositories/IFoodRepository';
import { ICreateFoodDTO } from './CreateFoodDTO';

export class CreateFoodUseCase {
  constructor(private foodRepository: IFoodRepository) {}

  async execute(data: ICreateFoodDTO) {
    const food = new Food(data);

    await this.foodRepository.save(food);
  }
}

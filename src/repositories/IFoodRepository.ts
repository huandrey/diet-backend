/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { Food } from '../entities/Food';

export interface IFoodRepository {
  save(food: Food): Promise<void>;
}

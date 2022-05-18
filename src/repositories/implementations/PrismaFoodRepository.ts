/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty */
import { prismaClient } from '../../database/prismaClient';
import { Food } from '../../entities/Food';
import { IFoodRepository } from '../IFoodRepository';

export class PrismaFoodRepository implements IFoodRepository {
  async save(food: Food) {
    try {
      await prismaClient.food.create({
        data: food,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

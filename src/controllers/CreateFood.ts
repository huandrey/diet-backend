/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateFood {
  async handle(req: Request, res: Response) {
    console.log(req.body);
    const {
      name, amount, protein, carbohydrate, calories, fat,
    } = req.body;

    const food = await prismaClient.food.create({
      data: {
        name, amount, protein, carbohydrate, calories, fat,
      },
    });

    return res.json(food);
  }
}

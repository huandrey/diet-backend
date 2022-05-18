/* eslint-disable import/prefer-default-export */
import { uuid } from 'uuidv4';

export class Food {
  public readonly id!: string;

  public name!: string;

  public amount!: number;

  public protein!: number;

  public carbohydrate!: number;

  public fat!: number;

  public calories!: number;

  constructor(props: Omit<Food, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

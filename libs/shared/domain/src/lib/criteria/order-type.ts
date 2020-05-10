import { ValueObject } from '../..';

export enum OrderTypes {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = 'NONE'
}

export class OrderType extends ValueObject<OrderTypes> {
  isNone(): boolean {
    return this.value === OrderTypes.NONE;
  }
}

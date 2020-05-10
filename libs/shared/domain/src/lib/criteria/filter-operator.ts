import { ValueObject } from '../..';

export enum Operator {
  EQUAL= '=',
  NOT_EQUAL = '!=',
  GT = '>',
  LT = '<',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
}

export class FilterOperator extends ValueObject<Operator> {
  static containing = [Operator.CONTAINS, Operator.NOT_CONTAINS];

  static equal(): FilterOperator {
    return new this(Operator.EQUAL);
  }

  isContaining(): boolean {
    return FilterOperator.containing.includes(this.value);
  }
}

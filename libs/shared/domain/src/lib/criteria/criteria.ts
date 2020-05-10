import { IntValueObject, Nullable } from '../..';
import { Filter } from './filter';
import { Order } from './order';

export class Criteria {
  private readonly _filters: Filter[];
  private readonly _order: Order;
  private readonly _offset?: IntValueObject;
  private readonly _limit?: IntValueObject;

  constructor(filters: Filter[], order: Order, offset?: IntValueObject, limit?: IntValueObject) {
    this._filters = filters;
    this._order = order;
    this._offset = offset;
    this._limit = limit;
  }

  hasFilters(): boolean {
    return this._filters.length > 0;
  }

  hasOrder(): boolean {
    return !this._order.isNone();
  }

  get filters(): Filter[] {
    return this._filters;
  }

  get order(): Order {
    return this._order;
  }

  get offset(): Nullable<IntValueObject> {
    return this._offset;
  }

  get limit(): Nullable<IntValueObject> {
    return this._limit;
  }
}

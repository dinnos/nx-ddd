import { OrderBy } from './order-by';
import { OrderType, OrderTypes } from './order-type';

export class Order {
  private orderBy: OrderBy;
  private orderType: OrderType;

  constructor(orderBy: OrderBy, orderType: OrderType) {
    this.orderBy = orderBy;
    this.orderType = orderType;
  }

  static createDesc(orderBy: OrderBy): Order {
    return new this(orderBy, new OrderType(OrderTypes.DESC));
  }

  static fromValues(orderBy?: string, orderType?: OrderTypes): Order {
    return null === orderBy ? this.none() : new this(new OrderBy(orderBy), new OrderType(orderType));
  }

  static none(): Order {
    return new this(new OrderBy(''), new OrderType(OrderTypes.NONE));
  }

  isNone(): boolean {
    return this.orderType.isNone();
  }
}

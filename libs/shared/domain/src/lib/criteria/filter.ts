import { FilterField } from './filter-field';
import { FilterOperator, Operator } from './filter-operator';
import { FilterValue } from './filter-value';

export class Filter {
  private readonly _field: FilterField;
  private readonly _operator: FilterOperator;
  private readonly _value: FilterValue;

  constructor(field: FilterField, operator: FilterOperator, value: FilterValue) {
    this._field = field;
    this._operator = operator;
    this._value = value;
  }

  static fromValue({ field, operator, value }: Record<string, string>): Filter {
    return new this(
      new FilterField(field),
      new FilterOperator(Operator[operator]),
      new FilterValue(value)
    );
  }

  get field(): FilterField {
    return this._field;
  }

  get operator(): FilterOperator {
    return this._operator;
  }

  get value(): FilterValue {
    return this._value;
  }
}

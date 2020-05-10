import { InvalidArgument } from '../..';

export class IntValueObject {
  private readonly _value: number;

  constructor(value: number) {
    this.ensureIsInteger(value);

    this._value = value;
  }

  private ensureIsInteger(value: number) {
    if (!Number.isInteger(value)) {
      throw new InvalidArgument(this.constructor.name, value);
    }
  }

  get value(): number {
    return this._value;
  }
}

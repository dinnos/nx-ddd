import validate from 'uuid-validate';
import { InvalidArgument } from '../..';

export class Uuid {
  private readonly _value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);

    this._value = value;
  }

  private ensureIsValidUuid(uuid: string) {
    if (!validate(uuid)) {
      throw new InvalidArgument(this.constructor.name, uuid);
    }
  }

  get value(): string {
    return this._value;
  }
}

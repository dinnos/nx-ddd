import { v4 as uuid } from 'uuid';

export abstract class DomainEvent {
  private readonly _aggregateId: string;
  private readonly _eventId: string = null;
  private readonly _occurredOn: Date;

  constructor(aggregateId: string, eventId?: string, occurredOn?: Date) {
    this._aggregateId = aggregateId;
    this._eventId = eventId || uuid();
    this._occurredOn = occurredOn || new Date();
  }

  abstract eventName(): string;
  abstract toPrimitive(): Record<string, unknown>;

  get aggregateId(): string {
    return this._aggregateId;
  }

  get eventId(): string {
    return this._eventId;
  }

  get occurredOn(): Date {
    return this._occurredOn;
  }
}

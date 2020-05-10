import { DomainEvent } from './event/domain-event';

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[] = [];

  abstract toPrimitives(): Record<string, unknown>;

  pullDomainEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents;

    this.domainEvents = [];

    return domainEvents;
  }

  protected record(domainEvent: DomainEvent): void {
    this.domainEvents.push(domainEvent);
  }
}

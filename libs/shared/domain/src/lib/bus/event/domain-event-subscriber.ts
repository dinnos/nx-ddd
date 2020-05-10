import { DomainEvent } from './domain-event';

export interface DomainEventSubscriber<Event extends DomainEvent> {
  subscribedTo(): string[];
  on(domainEvent: Event): void;
}

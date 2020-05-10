import { DomainEvent, DomainEventSubscriber, EventBus } from '@nx-ddd/shared/domain';
import { EventEmitterBus } from './event-emitter-bus';

export class InMemoryAsyncEventBus implements EventBus {
  private bus: EventEmitterBus;

  constructor(subscribers: DomainEventSubscriber<DomainEvent>[]) {
    this.bus = new EventEmitterBus(subscribers);
  }

  publish(events: DomainEvent[]): void {
    this.bus.publish(events);
  }
}

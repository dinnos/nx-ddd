import { DomainEvent, DomainEventSubscriber } from '@nx-ddd/shared/domain';
import { EventEmitter } from 'events';

export class EventEmitterBus extends EventEmitter {

  constructor(subscribers: DomainEventSubscriber<DomainEvent>[]) {
    super();

    this.registerSubscribers(subscribers);
  }

  private registerSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {
    subscribers.map(subscriber => this.registerSubscriber(subscriber));
  }

  private registerSubscriber(subscriber: DomainEventSubscriber<DomainEvent>): void {
    subscriber.subscribedTo().map(event => this.on(event, subscriber.on));
  }

  publish(events: DomainEvent[]): void {
    events.map(event => this.emit(event.eventName(), event));
  }
}

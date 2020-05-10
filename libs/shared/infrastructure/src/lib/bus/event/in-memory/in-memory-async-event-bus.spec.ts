import { DomainEvent, DomainEventSubscriber } from '@nx-ddd/shared/domain';
import { InMemoryAsyncEventBus } from '@nx-ddd/shared/infrastructure';
import { v4 as uuid } from 'uuid';

class DummyEvent extends DomainEvent {
  static DOMAIN_NAME = 'dummy:event';

  constructor(id: string) {
    super(id);
  }

  eventName(): string {
    return DummyEvent.DOMAIN_NAME;
  }

  toPrimitive(): Record<string, unknown> {
    throw new Error('Method not implemented');
  }
}

class DomainEventSubscriberDummy implements DomainEventSubscriber<DummyEvent>{
  on(domainEvent: DummyEvent): void {
    console.assert(domainEvent);
  }

  subscribedTo(): string[] {
    return [DummyEvent.DOMAIN_NAME];
  }
}

describe('InMemoryAsyncBus', () => {
  let subscriber: DomainEventSubscriberDummy;
  let eventBus: InMemoryAsyncEventBus;

  beforeEach(() => {
    subscriber = new DomainEventSubscriberDummy()
  });

  it('The subscriber should be called when the event it is subscribed to is published', done => {
    const event = new DummyEvent(uuid())

    subscriber.on = () => done();

    eventBus = new InMemoryAsyncEventBus([subscriber]);

    eventBus.publish([event]);
  });
});

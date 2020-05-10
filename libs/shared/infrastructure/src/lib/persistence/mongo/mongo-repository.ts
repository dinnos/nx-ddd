import { AggregateRoot } from '@nx-ddd/shared/domain';
import { Collection, MongoClient } from 'mongodb';

export abstract class MongoRepository<Aggregate extends AggregateRoot> {
  private readonly _client: Promise<MongoClient>;

  constructor(client: Promise<MongoClient>) {
    this._client = client;
  }

  protected abstract moduleName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.moduleName());
  }

  protected async persist(id: string, aggregateRoot: Aggregate): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }
}

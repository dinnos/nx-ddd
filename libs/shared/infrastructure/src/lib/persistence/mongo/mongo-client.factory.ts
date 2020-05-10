import { MongoClient } from 'mongodb';
import { Nullable } from '@nx-ddd/shared/domain';

export class MongoClientFactory {
  private static clients: Record<string, MongoClient> = {};

  static async createClient(contextName: string): Promise<MongoClient> {
    let client = this.getClient(contextName);

    if (!client) {
      client = await this.createAndConnectClient();

      this.registerClient(client, contextName);
    }

    return client;
  }

  private static getClient(contextName: string): Nullable<MongoClient> {
    return this.clients[contextName];
  }

  private static async createAndConnectClient(): Promise<MongoClient> {
    const client = new MongoClient(process.env.MONGO_URL, { useUnifiedTopology: true, ignoreUndefined: true });

    await client.connect();

    return client;
  }

  private static registerClient(client: MongoClient, contextName: string): void {
    this.clients[contextName] = client;
  }
}

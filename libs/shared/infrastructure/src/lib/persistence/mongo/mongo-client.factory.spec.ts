import { MongoClientFactory } from '@nx-ddd/shared/infrastructure';
import { MongoClient } from 'mongodb';

describe('MongoClientFactory', () => {
  const factory = MongoClientFactory;
  let client: MongoClient;

  beforeEach(async () => {
    client = await factory.createClient('test');
  });

  afterEach(async () => {
    await client.close();
  });

  it('should creates a new client with the connection already establish', () => {
    expect(client).toBeInstanceOf(MongoClient);
    expect(client.isConnected()).toBeTruthy();
  });

  it('should creates a new client if does not exist a client with the given name', async () => {
    const newClient = await factory.createClient('test2');

    expect(newClient).not.toBe(client);

    await newClient.close();
  });

  it('should returns a client if it already exist', async () => {
    const newClient = await factory.createClient('test');

    expect(newClient).toBe(client);

    await newClient.close();
  });
});

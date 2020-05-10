import { WinstonLogger } from '@nx-ddd/shared/infrastructure';

describe('WinstonLogger', () => {
  const logger = new WinstonLogger();

  it('Logs a debug message', async () => {
    await logger.debug('Debug message');
  });

  it('Logs an error message', async () => {
    await logger.error('Error message');
  });

  it('Logs an info message', async () => {
    await logger.info('Info message');
  });
});

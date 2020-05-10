import { Logger } from '@nx-ddd/shared/domain';
import { createLogger, transports, Logger as WinstonLoggerType } from 'winston';

enum Levels {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info',
}

export class WinstonLogger implements Logger {
  private logger: WinstonLoggerType;

  constructor() {
    this.logger = createLogger({
      transports: [
        new transports.Console(),
        new transports.File({ filename: `logs/${ Levels.DEBUG }.log`, level: Levels.DEBUG }),
        new transports.File({ filename: `logs/${ Levels.ERROR }.log`, level: Levels.ERROR }),
        new transports.File({ filename: `logs/${ Levels.INFO }.log`, level: Levels.INFO }),
      ]
    })
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }
}

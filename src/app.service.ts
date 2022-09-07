import { Injectable, Logger } from '@nestjs/common';
import { ulid } from 'ulid';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);

  getHello(): string {
    const uniqId = ulid();
    this.logger.error(`[${uniqId}] error`);
    this.logger.warn(`[${uniqId}] warn`);
    this.logger.log(`[${uniqId}] log`);
    this.logger.verbose(`[${uniqId}] verbose`);
    this.logger.debug(`[${uniqId}] debug`);

    return 'Hello World!';
  }
}

import { App, Inject } from '@midwayjs/core';
import { Application } from '../../../../../src';

export class QueueTask {
  @App()
  app: Application;

  @Inject()
  logger;

  async execute(params) {
    this.logger.info(`====>QueueTask execute`);
    this.app.setAttr(`queueConfig`, JSON.stringify(params));
  }
}

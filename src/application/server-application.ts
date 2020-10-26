import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
dotenv.config();
import { RootModule } from '@application/modules/root.module';
import ServerApplicationConfig from '@config/server-application.config';

export class ServerApplication {
  private readonly host: string = ServerApplicationConfig.host;
  private readonly port = ServerApplicationConfig.port;

  public static new(): ServerApplication {
    return new ServerApplication();
  }

  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    app.setGlobalPrefix('api');

    await app.listen(this.port, this.host);

    Logger.log(`Server started on host: ${this.host}; port: ${this.port};`, ServerApplication.name);
  }
}

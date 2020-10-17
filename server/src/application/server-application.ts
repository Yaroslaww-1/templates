import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
dotenv.config();
import { RootModule } from './di/root.module';
import { ServerApplicationConfig } from '@infrastructure/config/server-application.config';

export class ServerApplication {
  private readonly host: string = ServerApplicationConfig.HOST;

  private readonly port: number = ServerApplicationConfig.PORT;

  public static new(): ServerApplication {
    return new ServerApplication();
  }

  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    app.enableCors({
      origin: ServerApplicationConfig.APP_CLIENT_URL,
      optionsSuccessStatus: 200,
    });
    app.setGlobalPrefix('api');

    await app.listen(this.port, this.host);

    Logger.log(`Server started on host: ${this.host}; port: ${this.port};`, ServerApplication.name);
  }
}

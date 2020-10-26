import { Module } from '@nestjs/common';
import { ArticleModule } from '@application/modules/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '@config/database.config';
import { ArticleEntity } from './article/entities/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DatabaseConfig.type,
      host: DatabaseConfig.host,
      port: DatabaseConfig.port,
      username: DatabaseConfig.username,
      password: DatabaseConfig.password,
      database: DatabaseConfig.database,
      synchronize: DatabaseConfig.synchronize,
      entities: [ArticleEntity],
      migrations: [__dirname + '../../database/migrations'],
      migrationsRun: true,
    }),
    ArticleModule,
  ],
})
export class RootModule {}

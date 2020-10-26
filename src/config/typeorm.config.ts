type DatabaseType = 'mysql' | 'postgres';

const DatabaseConfig = {
  type: 'postgres' as DatabaseType,
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_DATABASE || 'test',
  entities: ['src/modules/**/*{.entity,.index}{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true' || false,
  logging: true,
  logger: 'simple-console',
};

module.exports = DatabaseConfig;

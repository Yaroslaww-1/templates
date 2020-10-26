export class ServerApplicationConfig {
  public static readonly HOST: string = process.env.APP_HOST || 'localhost';

  public static readonly PORT: number = parseInt(process.env.APP_PORT, 10) || 5001;
}

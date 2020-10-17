import { Ping } from '@core/entity/ping/ping.entity';

export interface IPingPort {
  get(): Promise<Ping>;
}

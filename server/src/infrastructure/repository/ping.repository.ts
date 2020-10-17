import { Ping } from '@core/entity/ping/ping.entity';
import { IPingPort } from '@core/usecase/ping-crud/port/ping.port';

export class PingRepository implements IPingPort {
  constructor() {}
  async get(): Promise<Ping> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Ping({ ping: 'pong' }));
      });
    });
  }
}

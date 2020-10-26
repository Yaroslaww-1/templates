import { Injectable } from '@nestjs/common';
import { PingEntity } from '../entities/ping.entity';

@Injectable()
export class PingRepository {
  constructor() {}
  async getPing(): Promise<PingEntity> {
    return {
      ping: 'pong',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PingDto } from '../dtos/ping.dto';
import { PingRepository } from '../repositories/ping.repository';

@Injectable()
export class PingService {
  constructor(private readonly pingRepository: PingRepository) {}

  async getPing(): Promise<PingDto> {
    const ping = this.pingRepository.getPing();
    return (ping as unknown) as PingDto;
  }
}

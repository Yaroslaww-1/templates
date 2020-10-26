import { Controller, Get } from '@nestjs/common';
import { PingService } from '../services/ping.service';

@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  async getPing(): Promise<string> {
    const ping = await this.pingService.getPing();
    return ping.ping;
  }
}

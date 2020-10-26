import { Module } from '@nestjs/common';
import { PingController } from './controllers/ping.controller';
import { PingRepository } from './repositories/ping.repository';
import { PingService } from './services/ping.service';

@Module({
  controllers: [PingController],
  providers: [PingRepository, PingService],
})
export class PingModule {}

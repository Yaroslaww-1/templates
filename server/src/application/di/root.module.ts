import { Module } from '@nestjs/common';
import { PingModule } from '@application/di/ping.module';

@Module({
  imports: [PingModule],
})
export class RootModule {}

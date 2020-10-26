import { Module } from '@nestjs/common';
import { PingModule } from '@application/modules/ping/ping.module';

@Module({
  imports: [PingModule],
})
export class RootModule {}

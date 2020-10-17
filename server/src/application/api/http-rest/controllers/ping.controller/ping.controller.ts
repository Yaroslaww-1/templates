import { PingTokens } from '@application/di/di-tokens/tokens';
import { GetPingUseCase } from '@core/usecase/ping-crud/get-ping/get-ping.usecase';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('ping')
export class PingController {
  constructor(
    @Inject(PingTokens.GetPingUseCase)
    private readonly getPingUseCase: GetPingUseCase,
  ) {}

  @Get()
  async getPing(): Promise<string> {
    const ping = await this.getPingUseCase.execute({});
    return ping.ping;
  }
}

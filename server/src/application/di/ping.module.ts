import { Module, Provider } from '@nestjs/common';
import { PingController } from '@application/api/http-rest/controllers/ping.controller/ping.controller';
import { GetPingUseCase } from '@core/usecase/ping-crud/get-ping/get-ping.usecase';
import { PingRepository } from '@infrastructure/repository/ping.repository';
import { PingTokens } from './di-tokens/tokens';

const persistenceProviders: Provider[] = [
  {
    provide: PingTokens.PingRepository,
    useFactory: () => new PingRepository(),
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: PingTokens.GetPingUseCase,
    useFactory: (pingRepository: PingRepository) => new GetPingUseCase(pingRepository),
    inject: [PingTokens.PingRepository],
  },
];

@Module({
  controllers: [PingController],
  providers: [...persistenceProviders, ...useCaseProviders],
})
export class PingModule {}

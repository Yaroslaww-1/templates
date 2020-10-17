import { UseCase } from '@core/common/usecase/usecase';
import { IPingPort } from '../port/ping.port';
import { IGetPingInput } from './get-ping.input.dto';
import { IGetPingOutput } from './get-ping.output.dto';

export class GetPingUseCase implements UseCase<IGetPingInput, IGetPingOutput> {
  constructor(private readonly pingRepository: IPingPort) {}
  async execute(payload: IGetPingInput): Promise<IGetPingOutput> {
    const ping = await this.pingRepository.get();
    return ping;
  }
}

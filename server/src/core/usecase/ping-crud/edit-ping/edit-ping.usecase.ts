import { UseCase } from '@core/common/usecase/usecase';
import { IEditPingInput } from './edit-ping.input.dto';
import { IEditPingOutput } from './edit-ping.output.dto';
import { IPingPort } from '../port/ping.port';

export class EditPingUseCase implements UseCase<IEditPingInput, IEditPingOutput> {
  constructor(private readonly pingRepository: IPingPort) {}
  async execute(payload: IEditPingInput): Promise<IEditPingOutput> {
    const ping = await this.pingRepository.get();
    await ping.edit(payload);
    return ping;
  }
}

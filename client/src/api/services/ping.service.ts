import { Throwable } from 'src/common/error/throwable';
import api from '../api.helper';
import { PingModel } from '../models/ping.model';

const endpoint = 'ping';

export class PingService {
  constructor() {}
  static async getPing(): Promise<PingModel | Throwable> {
    const response = await api.get<PingModel>(endpoint);
    return response;
  }
}

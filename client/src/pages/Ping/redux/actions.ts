import { createAsyncAction } from '../../../redux/helpers/actionCreator';

export const fetchPing = createAsyncAction('PING', 'PING', {
  request: () => ({}),
  success: (ping: string) => ({ ping }),
});
